const express = require('express')
const app = express()
const port = 3000
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const cors = require('cors')

//need to add cors to allow react to communicate with server
app.use(cors())

const corsOptions = {
   origin: 'http://localhost:3000',
   allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions));

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '192.168.50.44',
  user: 'root',
  password: 'web dev final',
  database: 'sys',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});



if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
 }




const insertQuery = 'INSERT INTO users (username) VALUES (?)';
const username = 'john_doe';

connection.query(insertQuery, [username], (err, results) => {
  if (err) {
    console.error('Error inserting record:', err);
    return;
  }
  console.log('Record inserted:', results.insertId);
});

const selectQuery = 'SELECT * FROM users';

connection.query(selectQuery, (err, results) => {
  if (err) {
    console.error('Error selecting records:', err);
    return;
  }
  console.log('Selected records:', results);
});

const updateQuery = 'UPDATE users SET username = ? WHERE user_id = ?';
const newUsername = 'updated_john_doe';
const userIdToUpdate = 1;

connection.query(updateQuery, [newUsername, userIdToUpdate], (err, results) => {
  if (err) {
    console.error('Error updating record:', err);
    return;
  }
  console.log('Record updated:', results.affectedRows);
});

const deleteQuery = 'DELETE FROM users WHERE user_id = ?';
const userIdToDelete = 1;

connection.query(deleteQuery, [userIdToDelete], (err, results) => {
  if (err) {
    console.error('Error deleting record:', err);
    return;
  }
  console.log('Record deleted:', results.affectedRows);
});

connection.end((err) => {
   if (err) {
     console.error('Error closing connection:', err);
     return;
   }
   console.log('Connection closed');
 });
 
 

 
 
 const createPassport = require('./passportConfig')
 createPassport(
   passport,
   async (email) => {
      return new Promise((resolve, reject) => {
         connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) {
               reject(err);
            } else {
               resolve(results[0]);
            }
         });
      });
   },
   async (id) => {
      return new Promise((resolve, reject) => {
         connection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
            if (err) {
               reject(err);
            } else {
               resolve(results[0]);
            }
         });
      });
   }
);


 app.set('view-engine','ejs')
 app.use(express.urlencoded({extended: false}))
 
 app.use(flash())
 
 console.log(process.env.SESSION_SECRET)
 
 app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
 }))
 
 app.use(passport.initialize())
 app.use(passport.session())
 app.use(methodOverride('_method'))
 
 
 //1 accesses the css and the js files in the public foler 
 app.use(express.static('public'))
 app.use('/css',express.static(__dirname + 'public/CSS'))
 app.use('/js',express.static(__dirname + 'public/JS'))
 
 
 //uses post to login and send to the index.js
 app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
 }))
 
 app.post('/register', checkNotAuthenticated, async (req, res) => {
   try {
      const hashedPassword = await bcrypt.hash(req.body.password, 8);

         connection.query('INSERT INTO users SET ?', {
         name: req.body.name,
         email: req.body.email,
         password: hashedPassword,
      }, (err, result) => {
         if (err) {
            console.error('Error inserting user into MySQL:', err);
            res.redirect('/register');
         } else {
            console.log('User inserted into MySQL:', result);
            res.redirect('/login');
         }
      });
   } catch (error) {
      console.error('Error during registration:', error);
      res.redirect('/register');
   }
});


 app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
 })
 
 function checkAuthenticated(req, res, next){
    if (req.isAuthenticated()){
       return next()
    }
    res.redirect('/login')
 }
 
 function checkNotAuthenticated(req, res, next){
    if (req.isAuthenticated()){
       return res.redirect('/')
    }
    next()
 }


// Create a new entry
app.post('/api/create-entry', (req, res) => {
   // Handle the creation logic here
   // Example: Insert the entry into the database
   // ...
 
   res.status(201).send({ message: 'Entry created successfully' });
 });
 
 // Update an entry
 app.put('/api/edit-entry/:id', (req, res) => {
   const entryId = req.params.id;
   // Handle the update logic here
   // Example: Update the entry in the database based on entryId
   // ...
 
   res.status(200).send({ message: 'Entry updated successfully' });
 });
 
 
 app.listen(port, () => console.log(`Example app listening on port ${port}!`))