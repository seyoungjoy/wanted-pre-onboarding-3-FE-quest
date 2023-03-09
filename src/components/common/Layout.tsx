import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <header style={{ position: 'fixed', top: '0', width: '100%' }}>
        <h2 style={{ padding: '10px' }}>Wanted Pre-onboarding course</h2>
        <hr />
      </header>
      <div style={{ display: 'flex', paddingTop: '53px' }}>
        <nav
          style={{
            width: '150px',
            height: '100%',
            padding: '10px',
          }}
        >
          <ul>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <div style={{ padding: '10px' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
