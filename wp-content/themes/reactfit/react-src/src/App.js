// Import modules and globals
import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

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
          const simplified = {
            name: response.data.name,
            description: response.data.description,
            url: response.data.url,
            home: response.data.home,
            gmt_offset: response.data.gmt_offset,
            timezone_string: response.data.timezone_string,
          }
          return simplified;
        })
        .catch(error => console.error(error));

      // Add home route info to meta -- used to ensure React Router works on any installation (localhost, dev server, etc)
      const testPath = '/' + meta.url.split('/').pop();
      meta.basePath = testPath.includes('.') || testPath.length === 0 ? '/' : testPath;

      // Get window width, to pass to child components for use in selecting appropriately-sized images
      const width = window.innerWidth || document.body.clientWidth;
      meta.width = width;

      // Add custom contact info settings to meta
      const contact = await axios
        .get(this.state.home + '/wp-json/reactfit/contact-info')
        .then(response => {
          return response.data;
        })
        .catch(error => console.error(error));
      meta.contact = contact;

      return meta;
    }

    // Header info -- just menu items, for now
    const getHeaderInfo = async () => {
      const headerInfo = await axios
        .get(this.state.home + '/wp-json/reactfit/header')
        .then(response => {
          // Just pull out needed data for now (might want more, if we get fancy)
          const headerMenuItems = response.data.menu.map(item => {
            return {
              id: item.ID,
              title: item.title,
              url: item.url,
            };
          });

          return {
            menu: headerMenuItems,
            logo: response.data.logo
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

      // Get home page, for creataing default route
      const homePage = pages.filter(page => {
        return page.id === 5340;
      });

      this.setState({
        meta: meta,
        header: header,
        pages: pages,
        homePage: homePage[0],
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
            <AboutUs meta={this.state.meta} page={page} />
          );
          break;
        case 'Contact Us':
          content = (
            <ContactUs meta={this.state.meta} page={page} />
          );
          break;
        case 'Get Started':
          content = (
            <GetStarted meta={this.state.meta} page={page} />
          );
          break;
        case 'None':
        default:
          content = (
            <DefaultTemplate meta={this.state.meta} page={page} />
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
        <div className="App App--loading">
          <div className="loading__spinner">
            <img className="loading__image" src="http://localhost/new-tcf/wp-content/uploads/2019/09/SM-tcf-logo-wings-only.png" alt="loading..." />
          </div>
        </div>
      );
    }

    return (
      <BrowserRouter basename={this.state.meta.basePath}>
        <div className="App">

          <Header menuItems={this.state.header.menu} logo={this.state.header.logo} meta={this.state.meta} />

          <Switch>

            {this.createRoutes(this.state.pages)}

            {/* When done, move this logic to createRoutes, and change to a 404 page as the default route */}
            <Route path="/" key="home_route">
              <Home meta={this.state.meta} page={this.state.homePage}/>
            </Route>

          </Switch>

          <Footer contact={this.state.meta.contact} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
