'use strict';

require('babel-register')({
    presets: ['react']
});

const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Component = require('./Component.jsx');

app.get('/', function(request, response) {

    const html = ReactDOMServer.renderToString(
        React.createElement(Component)
    );
    response.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});