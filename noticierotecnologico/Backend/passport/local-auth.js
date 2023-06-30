const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.use('local-singup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},(req, email, password, done)=>{
    
}))