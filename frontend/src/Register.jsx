import { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  const handleRegister = async () => {
    const res = await fetch('http://localhost:9000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, image })
    });
    const data = await res.json();
    alert("Account created: " + JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h2>Create Account</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <input placeholder="Image URL" onChange={(e) => setImage(e.target.value)} /><br /><br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;

