const express = require('express');
const mariadb = require('mariadb');
const dotenv = require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

async function connect() {
    try {
        let conn = await pool.getConnection();
        console.log('Connected to the database');
        return conn;
    } catch (err) {
        console.log('Error connecting to the database');
    }
}

// Home page - submit an event
app.get('/', (req, res) => {
    console.log("Hello server!")
    res.render('home', {data: {}});
});

// View event page after submission
app.post('/event', async (req, res) => {
    const data = req.body;
    
    let isValid = true;
    if (data.einput.trim() === '') {
        isValid = false;
    }
    if (data.etext.trim() === '') {
        isValid = false;
    }
    if (data.etime.trim() === '') {
        isValid = false;
    } else {
        const datetimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/; // (YYYY-MM-DDTHH:MM) format
        if (!datetimeRegex.test(data.etime)) {
            isValid = false;
        }
    }
    if (!isValid) {
        res.render('home', {data: data});
        return;
    }

    // Try to run SQL queries, otherwise throw an error
    try {
        const conn = await connect();
        await conn.query('INSERT INTO events (title, description, event_date) VALUES (?, ?, ?);', [data.einput, data.etext, data.etime]);
    } catch (error) {
        console.error('Error inserting event:', error);
        res.status(500).send('Error saving event.');
    }

    res.render('event', {data: data});
})

// View all events page
app.get('/all-events', async (req, res) => {
    const conn = await connect();
    const rows = await conn.query('SELECT * FROM events ORDER BY event_date ASC;');
    const upcomingEvent = rows[0]; // Top upcoming event
    res.render('all-events', {data: rows, upcomingEvent: upcomingEvent});
});

// Update event status: Finish event
app.post('/all-events/:id/complete', async (req, res) => {
    const {id} = req.params;
    const conn = await connect();
    await conn.query('UPDATE events SET is_completed = ? WHERE id = ?', [true, id]);
    conn.end();
    res.redirect('/all-events');
});

// Update event status: Delete event
app.post('/all-events/:id/delete', async (req, res) => {
    const {id} = req.params;
    const conn = await connect();
    await conn.query('DELETE FROM events WHERE id = ?', [id]);
    conn.end();
    res.redirect('/all-events');
});

// Listen to req, res and console log the server port
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});