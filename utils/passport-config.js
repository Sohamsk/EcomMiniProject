const LocalStrategy = require("passport-local").Strategy;
const { login } = require("../models/logins");
const bcrypt = require("bcrypt");

exports.initializePassport = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        const us = await login.findByPk(email);
        if (!us) return done(null, false);
        if (await bcrypt.compare(password, us.login_pwd)) return done(null, us);

        return done(null, false);
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
