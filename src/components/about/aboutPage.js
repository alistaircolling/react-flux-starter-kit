"use strict";

var React = require('react');

var About = React.createClass({
  //check out aggressive indent!
  render: function() {
    return (
      <div className="jumbotron">
        <h1>The About Page</h1>
        <p>This is the about page</p>
      </div>
    );
  }
});

module.exports = About;
