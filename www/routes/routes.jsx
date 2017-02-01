'use strict';

// import Route from 'react-router/lib/Route';
// import Router from 'react-router/lib/Router';
// import IndexRoute from 'react-router/lib/IndexRoute';
// import browserHistory from 'react-router/lib/browserHistory';

const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const browserHistory = ReactRouter.browserHistory;
let createElement;

if (typeof window === 'object') {
    createElement = function(Component, props) {
        const element = document.getElementById('js-bundle');
        const pageProps = JSON.parse(element.dataset.props);
        return <Component {...props} appProps={pageProps} />;
    }
}

module.exports = (
    <Router history={browserHistory} createElement={createElement}>
        <Route path='/' component={require('../views/Layout.jsx')}>
            <IndexRoute component={require('../views/Index.jsx')}/>
            <Route path='about' component={require('../views/About.jsx')} />
        </Route>
    </Router>
);
