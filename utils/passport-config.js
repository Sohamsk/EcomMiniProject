const LocalStrategy = require("passport-local").Strategy;
const { login } = require("../models/logins");

exports.initializePassport = (passport) => {
  console.log("init passport");
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        const us = await login.findOne({ email: email });
        if (!us) return done(null, false);
        if (us.login_pwd !== password) return done(null, false);

        return done(null, us);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.login_id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await login.findByPk(id);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  });
};
