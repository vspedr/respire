import { h, Component } from 'preact';
import { Router } from 'preact-router';
import ReactGA from 'react-ga';
import Helmet from 'preact-helmet';

// Code-splitting is automated for routes
import Home from '../routes/home';

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  componentDidMount() {
    ReactGA.initialize('UA-108534391-3');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <>
        <Helmet
          htmlAttributes={{ lang: 'pt-BR' }}
          title="respire"
          meta={[
            {
              name: 'description',
              content: 'Exercício de respiração para controle da ansiedade',
            },
            {
              name: 'og:description',
              content: 'Exercício de respiração para controle da ansiedade',
            },
            {
              name: 'og:image',
              content: '/assets/images/web_hi_res_512.png',
            },
            {
              name: 'twitter:description',
              content: 'Exercício de respiração para controle da ansiedade',
            },
            {
              name: 'keywords',
              content:
                'respiração, exercício, tranquilidade, relax, meditação, calma, controle, saúde',
            },
            { name: 'viewport', content: 'user-scalable=no' },
          ]}
        />
        <div id="app">
          <Router onChange={this.handleRoute}>
            <Home path="/" />
          </Router>
        </div>
      </>
    );
  }
}
