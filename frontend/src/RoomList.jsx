import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState('');
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:9000/rooms')
      .then(res => res.json())
      .then(setRooms);
  }, []);

  const createRoom = async () => {
    const res = await fetch('http://localhost:9000/rooms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: roomName })
    });
    const newRoom = await res.json();
    setRooms([...rooms, newRoom]);
    setRoomName('');
  };

  return (
    <div>
      <h2>Available Chat Rooms</h2>
      {user && (
        <>
          <input
            value={roomName}
            onChange={e => setRoomName(e.target.value)}
            placeholder="New Room Name"
          />
          <button onClick={createRoom}>Create Room</button>
        </>
      )}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {rooms.map(room => (
          <li key={room._id}>
            <button onClick={() => navigate(`/chat/${room.name}`)}>{room.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;

