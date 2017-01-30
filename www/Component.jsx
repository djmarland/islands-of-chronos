'use strict';

const React = require('react');

module.exports = React.createClass({
    _handleClick: function() {
        alert('me me me ');
    },
    render: function() {
        return (
            <html>
            <head>
                <title>Universal App with React</title>
                <link rel='stylesheet' href='http://static.dev.chronos.com:8090/styles.css' />
            </head>
            <body>
            <div>
                <h1>Hello der World!</h1>
                <p>Isn't server-side rendering remarkable?</p>
                <button onClick={this._handleClick}>Click Me</button>
            </div>
            <script src='http://static.dev.chronos.com:8090/bundle.js' />
            </body>
            </html>
        );
    }
});



// import React from 'react';
//
// class Component extends React.Component {
//     render() {
//         return React.createElement('h1', null, 'Hello World!');
//     }
// }
