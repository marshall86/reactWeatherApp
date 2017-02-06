var React  = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples component</h1>
            <p>Here are a few examples location to try out</p>
            <ol>
                <li>
                    <Link to="/?locaiton=Naples">Naples, Italy</Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio, Brazil</Link>
                </li>
            </ol>
        </div>
    );

};

module.exports = Examples;