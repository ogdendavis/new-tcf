// Import modules and globals
import React from 'react';
import logo from './logo.svg';
import axios from 'axios';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

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
    // One call for app-wide info
    const getSiteMeta = async () => {
      const meta = await axios
        .get('http://localhost/new-tcf/wp-json')
        .then(response => {
          return response.data;
        })
        .catch(error => console.log(error));

      return meta;
    }

    // Header info -- just menu items, for now
    const getHeaderInfo = async () => {
      const headerInfo = await axios
        .get('http://localhost/new-tcf/wp-json/reactfit/header-menu')
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

    const runAllCalls = async () => {
      const meta = await getSiteMeta();
      const header = await getHeaderInfo();
      this.setState({
        meta: meta,
        header: header,
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
      <div className="App">
        <Header menuItems={this.state.header.menu} />
        <Hero image={'http://localhost/new-tcf/wp-content/uploads/2019/09/hero-temp.jpg'} />
        <Footer />
      </div>
    );
  }
}

export default App;
