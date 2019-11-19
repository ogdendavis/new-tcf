// Import modules and globals
import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

// Import modules
import Hero from './modules/Hero';

// Import page templates
import Home from './templates/Home';
import GetStarted from './templates/GetStarted';
import DefaultTemplate from './templates/Default';
import ContactUs from './templates/ContactUs';
import AboutUs from './templates/AboutUs';

// Declare gloabl to prevent ESLint error in Yarn build
/* global reactfitHomeUrl */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
      home: ''
    } // Initial app state set in componentDidMount

    this.getFromWordpress = this.getFromWordpress.bind(this);
    this.createRoutes = this.createRoutes.bind(this);
  }

  componentDidMount() {
    // Set home url in state from variable in header
    // Wait until home is set before getting data from REST API
    if (typeof(reactfitHomeUrl) !== undefined) {
      this.setState({ home: reactfitHomeUrl }, this.getFromWordpress);
    }
    else {
      console.error('Home URL is not defined in App.js');
    }
  }

  // One API call to rule them all
  getFromWordpress() {
    // WP meta info
    const getSiteMeta = async () => {
      const meta = await axios
        .get(this.state.home + '/wp-json')
        .then(response => {
          return response.data;
        })
        .catch(error => console.error(error));

      // Add home route info to meta -- used to ensure React Router works on any installation (localhost, dev server, etc)
      const testPath = '/' + meta.url.split('/').pop();
      meta.basePath = testPath.includes('.') || testPath.length === 0 ? '/' : testPath;

      return meta;
    }

    // Header info -- just menu items, for now
    const getHeaderInfo = async () => {
      const headerInfo = await axios
        .get(this.state.home + '/wp-json/reactfit/header-menu')
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
        .catch(error => console.error(error));

      return headerInfo;
    }

    // Get pages using default WP api call, and simplify data in the JS
    const getPages = async () => {
      const pages = await axios
        .get(this.state.home + '/wp-json/wp/v2/pages')
        .then(response => {
          const simplifiedPages = response.data.map(page => {
            return {
              id: page.id,
              title: page.title.rendered,
              slug: page.slug,
              template: page.custom_template,
              parent: page.parent,
              content: page.content.rendered,
              acf_fields: page.acf_fields,
            };
          });
          return simplifiedPages;
        })
        .catch(error => console.error(error));

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

  createRoutes(pages) {
    return pages.map(page => {
      const template = page.acf_fields ?
        (page.acf_fields.custom_page_template === '' ?
          'default' :
          page.acf_fields.custom_page_template) :
        'default';
      let content;

      // Template determined by custom template field
      // User updates field on page edit screen (created via ACF)
      // These template names map to the possible values of the ACF field
      switch(template) {
        case 'Home':
          content = (
            <Home meta={this.state.meta} page={page} />
          );
          break;
        case 'About Us':
          content = (
            <AboutUs home={this.state.home} page={page} />
          );
          break;
        case 'Contact Us':
          content = (
            <ContactUs home={this.state.home} page={page} />
          );
          break;
        case 'Get Started':
          content = (
            <GetStarted home={this.state.home} page={page} />
          );
          break;
        case 'None':
        default:
          content = (
            <DefaultTemplate page={page} />
          );
      }

      return (
        <Route path={'/' + page.slug} key={page.title + '_route'}>
          {content}
        </Route>
      );
    });
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

          <Header menuItems={this.state.header.menu} home={this.state.home} />

          <Switch>

            {this.createRoutes(this.state.pages)}

            {/* When done, move this logic to createRoutes, and change to a 404 page as the default route */}
            <Route path="/" key="home_route">
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
