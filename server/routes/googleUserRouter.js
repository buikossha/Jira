require('dotenv').config();
const router = require('express').Router();
const passport = require('passport');
const { User } = require('../db/models');

router.get('/main', async (req, res) => {
  if (req?.session?.passport) {
    res.locals.name = req.session.passport.user.displayName;
  }
  res.render('main');
});

router.get('/signIn',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
    prompt: "select_account",
  })
)

router.get('/signIn/callback',
  passport.authenticate('google', {
    failureRedirect: '/signIn',
    successRedirect: `${process.env.ORIGIN}`,
  })
);

router.get('/logout', (req, res) => {
  console.log('hui');
  console.log(req.session);
  req.session.destroy();
  req.logout()
  res.clearCookie('sid');
});

router.get('/checkAuth', async (req, res) => {
  if (req?.user) {
    try {
      const findUser = await User.findOne({ where: { email: req?.user.emails[0].value } });
      if (req?.user.emails[0].value === findUser?.email) {
        return res.json(findUser);
      }
      console.log(req.user);
      const newUser = await User.create({
        email: req?.user.emails[0].value,
        name: req?.user.name.givenName,
      });
      return res.json(newUser);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(400);
});

module.exports = router;
