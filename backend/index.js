// index.js (in your backend folder)

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const { OAuth2Client } = require('google-auth-library');

// --- SETUP ---
const app = express();
app.use(cors({
  origin: 'http://localhost:3000' // Only allow our React app to talk to us
}));
app.use(express.json()); // Allows us to read JSON from the request body

const GOOGLE_CLIENT_ID = "356990086070-c7o31i8fa2o1h7mj33cfhe92tl10fusl.apps.googleusercontent.com";
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

// --- DATABASE CONNECTION ---
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// --- API ENDPOINTS (The Butler's Tasks) ---

// This is the main task: Handle Google Login
app.post('/api/auth/google', async (req, res) => {
  try {
    const { token } = req.body;

    // 1. Butler verifies the token (the 'key') with Google
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: GOOGLE_CLIENT_ID,
    });
    const { name, email, sub: google_id } = ticket.getPayload();

    // 2. Butler checks if the guest is already in the guest book (database)
    let user = await pool.query('SELECT * FROM users WHERE google_id = $1', [google_id]);

    if (user.rows.length === 0) {
      // 3. If guest is new, Butler writes their name in the book
      console.log('Creating new user:', name);
      user = await pool.query(
        'INSERT INTO users (name, email, google_id) VALUES ($1, $2, $3) RETURNING *',
        [name, email, google_id]
      );
    }

    console.log('User logged in:', user.rows[0].name);
    
    // 4. Butler tells the website "Success!" and sends back the user info
    res.status(200).json(user.rows[0]);

  } catch (error) {
    console.error('Error during Google authentication:', error);
    res.status(400).json({ error: 'Authentication failed' });
  }
});

// --- START THE SERVER ---
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Butler is on duty! Server is running on port ${PORT}`);
});