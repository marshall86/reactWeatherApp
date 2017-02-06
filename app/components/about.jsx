var React  = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="page-title text-center">About component</h1>
            <p>This is a weather app build on React, I have built this for The complete App developer course</p>
            <p>Here are some of the tools I used: </p>
            <ul>
                <li><a href="https://facebook.github.io/react">React</a> -- This was the Javascript framework used</li>
                <li><a href="http://openweathermap.org">Open weather map</a> -- to search for data by city name</li>
            </ul>
        </div>
    );
};

module.exports = About;