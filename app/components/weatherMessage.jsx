var React  = require('react');

//var weatherMessage = (props) => { otherwise :
var weatherMessage = ({temp, city}) => {
    return (
        <h3 className="text-center">It's {temp} in {city}</h3>
    );

};

module.exports = weatherMessage;