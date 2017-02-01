'use strict';

const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');

router.get('*', function(request, response) {
    const props = { title: 'Universal React' };
    ReactRouter.match({
        routes: require('./routes.jsx'),
        location: request.url
    }, function(error, redirectLocation, renderProps) {
        if (redirectLocation) {
            response.redirect(
                redirectLocation.code,
                redirectLocation.pathname + redirectLocation.search
            );
            return;
        }
        if (error) {
            response.status(500).send(error.message);
            return;
        }
        if (renderProps) {
            const html = ReactDOMServer.renderToString(
                <ReactRouter.RouterContext {...renderProps}
                   createElement={function(Component, renderProps) {
                       return <Component {...renderProps} appProps={props} />;
                   }}
                />
            );
            response.send('<!DOCTYPE html>' + html);
            return
        }
        response.status(404).send('Not Found');
    });
});

module.exports = router;
