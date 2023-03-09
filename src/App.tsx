import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
import Layout from './components/common/Layout';
import LoginWithMockAPI from './pages/LoginWithMockAPI';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="/login" element={<LoginWithMockAPI />} />
    </Routes>
  );
};

export default App;
