require('dotenv').config();
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(morgan('dev'));

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))
app.use(cors({ credentials: true, origin: process.env.ORIGIN, sameSite: false }));

const googleUserRouter = require('./routes/googleUserRouter')
const projectRouter = require('./routes/projectRouter')

const sessionConfig = {
  key: 'sid',
  secret: process.env.SALT,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    expires: 24 * 60 * 60e3,
    httpOnly: false,
    sameSite: false
  },
};

app.use(session(sessionConfig))
app.use(passport.initialize())
app.use(passport.session(sessionConfig))

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.GOOGLE_REDIRECT_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(`===> profile = ${JSON.stringify(profile)}`);
      return done(null, profile)
    }
  )
)


app.use('/googleUser', googleUserRouter)
app.use('/project', projectRouter)


app.listen(PORT, () => {
  console.log('Server start on port', PORT)
})
