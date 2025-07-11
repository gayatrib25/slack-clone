import { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = async () => {
    const res = await fetch('http://localhost:9000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, image })
    });

    if (res.ok) {
      const data = await res.json();
      login(data);
      navigate('/');
    } else {
      alert("Registration failed!");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br /><br />
      <input placeholder="Image URL" onChange={e => setImage(e.target.value)} /><br /><br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;

