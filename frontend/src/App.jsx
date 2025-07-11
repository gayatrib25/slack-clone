import { Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>Slack Clone</h1>
      <nav>
        <Link to="/register" style={{ marginRight: '20px' }}>Register</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<div>Welcome to Slack Clone</div>} />
      </Routes>
    </div>
  );
}

export default App;

