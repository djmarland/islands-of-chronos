'use strict';

const React = require('react');
// import Link from 'react-router/lib/Link';
const Link = require('react-router').Link;

module.exports = React.createClass({
    _handleClick: function() {
        alert('me me me ');
    },
    render: function() {
        const appProps = this.props.appProps;
        return (
            <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel='stylesheet' href='http://static.dev.chronos.com:8090/styles.css' />
                <title>{appProps.title}</title>
            </head>
            <body>
            <div>
                <h1>{appProps.title}</h1>
                <p>Isn't server-side rendering remarkable?</p>
                <button onClick={this._handleClick}>Click Me</button>
                {this.props.children}
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
            <script src="http://static.dev.chronos.com:8090/bundle.js"
                    data-props={JSON.stringify(appProps)}
                    id="js-bundle" />
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
