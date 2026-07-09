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

## Deployment

### 🚀 Deploy Backend to Render

1. **Sign up/login to Render** at https://render.com
2. **Create a new Web Service**:
   - Go to "New" > "Web Service"
   - Connect your GitHub account and select the `contentsync` repository
3. **Configure the Web Service**:
   - **Name**: `contentsync-backend` (or your preferred name)
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. **Add Environment Variables (in Render dashboard)**:
   - `PORT`: Render will set this automatically, but you can use `10000` if needed
   - `FRONTEND_URL`: `https://your-vercel-app-url.vercel.app` (update once frontend is deployed)
   - **Optional: MongoDB Atlas** (for persistent data):
     - `MONGO_URI`: Your MongoDB Atlas connection string (make sure to whitelist Render's IPs)
5. **Click "Create Web Service"** - wait a few minutes for it to deploy!
6. **Copy your Render backend URL** (e.g., `https://contentsync-backend.onrender.com`) - you'll need this for the frontend!

### ⚡ Deploy Frontend to Vercel

1. **Sign up/login to Vercel** at https://vercel.com
2. **Create a new Project**:
   - Click "Add New" > "Project"
   - Connect your GitHub account and select the `contentsync` repository
3. **Configure the Project**:
   - **Project Name**: `contentsync`
   - **Root Directory**: `client`
   - **Framework Preset**: `Vite` (should be auto-detected)
4. **Add Environment Variable (in Vercel dashboard)**:
   - `VITE_API_URL`: Your Render backend URL (e.g., `https://contentsync-backend.onrender.com`)
5. **Click "Deploy"**! Vercel will build and deploy your app automatically!

### 🔗 Connecting Frontend & Backend

Once both are deployed, go back to **Render** and update the `FRONTEND_URL` environment variable to your Vercel app's URL!

### 📝 Notes

- **Media Uploads**: For production, you should use a cloud storage service like AWS S3 or Cloudinary (the current local `uploads/` directory won't work with serverless platforms like Render that don't persist file storage)
- **In-Memory MongoDB**: This is great for local development, but for production, use MongoDB Atlas!

