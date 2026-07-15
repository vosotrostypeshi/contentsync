# ContentSync - Social Post Composer

A responsive React-based post composer that allows users to create a single post for multiple social media platforms with real-time platform-specific validation.

## 🌐 Live Demo
- **Frontend**: https://contentsync-two.vercel.app/
- **Backend API**: https://contentsync-backend.onrender.com/

## Tech Stack

- **Frontend**: React.js, Vite
- **Backend**: Express.js + Node.js
- **Database**: MongoDB
- **Styling**: Custom CSS (Vellum Overprint theme)

## Features

- Create posts for multiple social platforms (Twitter, LinkedIn, Facebook, Instagram)
- Real-time character count validation per platform
- Media upload support (PNG, JPG, MP4)
- Responsive design
- Real-time validation sidebar
- Drag & drop media upload

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (optional, uses in-memory server by default for local development)

### Installation

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   cd server && npm install
   cd ../client && npm install
   ```

### Running the Application

- Start both server and client with:
```bash
npm run dev
```
Or start separately:
1. Server: `cd server && npm run dev` (runs on port 5000)
2. Client: `cd client && npm run dev` (runs on port 5173)

## Folder Structure

```
social-post-composer/
├── client/                  (React Frontend)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── services/
│       ├── App.jsx
│       └── main.jsx
├── server/                  (Express Backend)
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   └── server.js
└── README.md
```
### 📝 Notes

- **Media Uploads**: For production, you should use a cloud storage service like AWS S3 or Cloudinary (the current local `uploads/` directory won't work with serverless platforms like Render that don't persist file storage)
- **In-Memory MongoDB**: This is great for local development, but for production, use MongoDB Atlas!

