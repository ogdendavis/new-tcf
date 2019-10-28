// Import modules and globals
import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Content from './components/Content';

// Import page templates
import Home from './templates/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
    } // Initial app state set in getFromWordpress

    this.getFromWordpress = this.getFromWordpress.bind(this);
  }

  componentDidMount() {
    this.getFromWordpress();
  }

  // One API call to rule them all
  getFromWordpress() {
    // WP meta info
    const getSiteMeta = async () => {
      const meta = await axios
        .get(reactfitHomeUrl + '/wp-json')
        .then(response => {
          return response.data;
        })
        .catch(error => console.log(error));

      // Add home route info to meta -- used to ensure React Router works on any installation (localhost, dev server, etc)
      const testPath = '/' + meta.url.split('/').pop();
      meta.basePath = testPath.includes('.') || testPath.length === 0 ? '/' : testPath;

      return meta;
    }

    // Header info -- just menu items, for now
    const getHeaderInfo = async () => {
      const headerInfo = await axios
        .get(reactfitHomeUrl + '/wp-json/reactfit/header-menu')
        .then(response => {
          // Just pull out needed data for now (might want more, if we get fancy)
          const headerMenuItems = response.data.map(item => {
            return {
              id: item.ID,
              title: item.title,
              url: item.url,
            };
          });

          return {
            menu: headerMenuItems,
          };

        })
        .catch(error => console.log(error));

      return headerInfo;
    }

    // Get pages using default WP api call, and simplify data in the JS
    const getPages = async () => {
      const pages = await axios
        .get(reactfitHomeUrl + '/wp-json/wp/v2/pages')
        .then(response => {
          const simplifiedPages = response.data.map(page => {
            return {
              id: page.id,
              slug: page.slug,
              template: page.template,
              parent: page.parent,
            };
          });
          return simplifiedPages;
        })
        .catch(error => console.log(error));

      return pages;
    }


    const runAllCalls = async () => {
      const meta = await getSiteMeta();
      const header = await getHeaderInfo();
      const pages = await getPages();
      this.setState({
        meta: meta,
        header: header,
        pages: pages,
      }, goTime);
    }

    const goTime = () => {
      this.setState({render: true});
    }

    runAllCalls();
  }

  render() {
    if (!this.state.render) {
      return (
        <div className="App" style={{marginTop:'50px'}}>
          {/*Replace this with a cool loading spinner!*/}
          ... loading ...
        </div>
      );
    }

    return (
      <BrowserRouter basename={this.state.meta.basePath}>
        <div className="App">

          <Header menuItems={this.state.header.menu} />

          <Switch>

            <Route path="/">
              <Hero home={true} image={'http://localhost/new-tcf/wp-content/uploads/2019/09/hero-temp.jpg'} />
              <Home meta={this.state.meta}/>
            </Route>

          </Switch>

          <Footer />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
