var React  = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
        <div>
            <h2>Nav Component</h2>
            <ul>
                <li><IndexLink to="/"         activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink></li>
                <li><IndexLink to="/about"    activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink></li>
                <li><IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</IndexLink></li>
            </ul>
        </div>
    );

};

module.exports = Nav;