import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './UserContext';

function Chat() {
  const { roomName } = useParams();
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const fetchMessages = () => {
    fetch(`http://localhost:9000/messages/${roomName}`)
      .then(res => res.json())
      .then(setMessages);
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000);
    return () => clearInterval(interval);
  }, [roomName]);

  const sendMessage = async () => {
    await fetch('http://localhost:9000/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ room: roomName, user: user.email, text })
    });
    setText('');
    fetchMessages();
  };

  return (
    <div>
      <h2>Chat Room: {roomName}</h2>
      <div style={{ border: '1px solid gray', padding: '1rem', maxHeight: '300px', overflowY: 'scroll' }}>
        {messages.map(msg => (
          <div key={msg._id}>
            <strong>{msg.user}</strong>: {msg.text}
          </div>
        ))}
      </div>
      {user && (
        <>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type message..."
          />
          <button onClick={sendMessage}>Send</button>
        </>
      )}
    </div>
  );
}

export default Chat;

