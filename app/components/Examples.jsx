var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">Exemples</h1>
      <p>Voici quelques exemples de lieux à tester :</p>
      <ol>
        <li>
          <Link to='/?location=Fleury-sur-Andelle'>Fleury-sur-Andelle, France</Link>
        </li>
        <li>
          <Link to='/?location=Nanterre'>Nanterre, France</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
