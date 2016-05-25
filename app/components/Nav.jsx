var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Obtenir le temps</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>A propos</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Exemples</Link>
    </div>
  );
};

module.exports = Nav;
