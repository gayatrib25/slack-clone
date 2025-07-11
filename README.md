# 🧩 Slack Clone - MERN Stack + Docker

A simple **Slack-style clone app** built using the **MERN stack** (MongoDB, Express, React, Node.js) and containerized using **Docker**. This app supports:

✅ User Registration & Login  
✅ MongoDB Integration  
✅ Docker Compose Setup  
✅ React + Vite Frontend  
✅ Express + Mongoose Backend

---

## 📦 Tech Stack

| Layer    | Stack                        |
| -------- | ---------------------------- |
| Frontend | React + React Router + Vite  |
| Backend  | Express + Mongoose (MongoDB) |
| Database | MongoDB                      |
| DevOps   | Docker + Docker Compose      |

---

## 📁 Project Structure

```
slack-clone/
├── docker-compose.yml
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── Login.jsx
│       ├── Register.jsx
│       └── main.jsx
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/slack-clone.git
cd slack-clone
```

### 2️⃣ Run the App with Docker

```bash
docker compose up --build
```

---

## 🌐 Access the App

- Frontend: http://localhost:3000
- Register: http://localhost:3000/register
- Login: http://localhost:3000/login
- MongoDB: mongodb://localhost:27017 (use with Compass)

---

## 📌 API Endpoints

| Method | Endpoint     | Description       |
|--------|--------------|-------------------|
| POST   | `/register`  | Register a user   |
| POST   | `/login`     | Authenticate user |

---

## ✅ Features

- 🧾 Register and login users
- 🗂 MongoDB integration via Mongoose
- ⚙️ Dockerized setup with Compose
- ⚡️ Built with Vite for lightning-fast frontend

---

## 🛠 To Do (Coming Soon)

- [ ] JWT Auth + Protected Routes
- [ ] Chat Rooms & Messages
- [ ] Socket.IO for Real-Time Messaging
- [ ] Deployment to Render/Vercel

---

## 🧑‍💻 Author

**Gayatri Bhole**  
[GitHub](https://github.com/gayatrib25)
