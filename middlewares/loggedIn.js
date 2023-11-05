function isLoggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.status(401);
  }
}

module.exports = {
  isLoggedIn,
};
