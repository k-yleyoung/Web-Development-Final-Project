if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
 }
 
 const express = require('express')
 const app = express()
 const port = 3000
 
 const bcrypt = require('bcrypt')
 const passport = require('passport')
 const flash = require('express-flash')
 const session = require('express-session')
 const methodOverride = require('method-override')
 
 const usrs = []
 
 const createPassport = require('./passportConfig')
 createPassport(
    passport,
    email=>usrs.find(user => user.email === email),
    id =>usrs.find(user =>user.id === id)
 )
 
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
 
 app.get('/', checkAuthenticated, (req, res) =>{
    res.render('index.ejs', {name: req.user.name})
 })
 
 app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs') 
 })
 
 app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs');
 });
 
 
 
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
 
 app.post('/register', checkNotAuthenticated, async(req, res) => {
    try{
       const hashedPassword = await bcrypt.hash(req.body.password, 8)
       usrs.push({
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
       })
       res.redirect('/login')
    }catch{
       res.redirect('/register')
    }
    console.log(usrs)
    //logs usr out
 })
 
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
 
 app.listen(port, () => console.log(`Example app listening on port ${port}!`))