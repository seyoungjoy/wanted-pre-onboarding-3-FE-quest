import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div>
      <h2>This is NoMatch</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};

export default NoMatch;
