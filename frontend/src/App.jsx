import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import Register from './Register';
import Login from './Login';
import RoomList from './RoomList';
import Chat from './Chat';

function App() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>Slack Clone</h1>
      <nav style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/register" style={{ marginRight: '20px' }}>Register</Link>
        <Link to="/login" style={{ marginRight: '20px' }}>Login</Link>
        {user && (
          <button onClick={handleLogout} style={{ marginLeft: '20px' }}>Logout</button>
        )}
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat/:roomName" element={<Chat />} />
        <Route path="/" element={<RoomList />} />
      </Routes>
    </div>
  );
}

export default App;

