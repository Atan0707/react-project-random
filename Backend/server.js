const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // add this line
const port = 8081;

//create connection to database named test
const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'test'
})

//to handle get
app.get('/', (req, res) => {
    return res.json("from backend side")
    });

//to handle get
app.get('/user', (req, res) => {
    const sql = "SELECT * FROM user"; //select from table user
    db.query(sql, (err, data) => {
        if(err) {
            return res.json(err);
        }
        return res.json(data);
    
    })
});

//to handle post
app.post('/user', (req, res) => {
    const {name, phone, email} = req.body;
    const sql = `INSERT INTO user (name, phone, email) VALUES ('${name}', '${phone}', '${email
    }')`;
    db.query(sql, (err, data) => {
        if(err) {
            return res.json(err);
        }
        return res.json(data);
    });
})

//get user info by id
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM user WHERE id = ?`;
    db.query(sql, id, (err, data) => {
        if(err) {
            return res.json(err);
        }
        return res.json(data[0]);
        
    });
});

//to handle delete
app.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM user WHERE id = ?`;
    db.query(sql, id, (err, data) => {
        if(err) {
            return res.json(err);
        }
        return res.json({ message: 'User deleted' });
        console.log("deleted");
    });
});

//datbase run on port 8081
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// to check if the database is connected
db.connect ((err) => {
    if(err) {
        console.log('Database error: You didnt start your xampp server or mysql server');
    } else {
        console.log("mysql connected");
    }
})