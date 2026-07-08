
# Social Post Composer

A responsive React-based post composer that allows users to create a single post for multiple social media platforms with real-time platform-specific validation.

## Tech Stack

- **Frontend**: React.js, Bootstrap
- **Backend**: Express.js + Node.js
- **Database**: MongoDB
- **API Testing**: Postman
- **Styling**: CSS / Bootstrap

## Features

- Create posts for multiple social platforms (Twitter, LinkedIn, Facebook, Instagram)
- Real-time character count validation per platform
- Media upload support
- Responsive design

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB running locally

### Installation

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   cd server && npm install
   cd ../client && npm install
   ```

### Running the Application

1. Start MongoDB locally
2. Start the server:
   ```bash
   cd server && npm run dev
   ```
3. Start the client in another terminal:
   ```bash
   cd client && npm start
   ```

Or use concurrently to start both:
```bash
npm run dev
```

## Folder Structure

```
social-post-composer/
├── client/                  (React)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── services/
│       ├── App.jsx
│       └── index.js
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   └── server.js
└── README.md
```
