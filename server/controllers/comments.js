const Comment = require('../models/comment');

exports.addComment = function(req, res, next) {
  const email = req.body.email;
  const message = req.body.message;
  const hash = req.body.hash;

  if (!email || !message) {
    return res
      .status(422)
      .send({ error: 'You must provide an email and a message' });
  }

  const comment = new Comment({
    email: email,
    message: message,
    hash: hash
  });
  comment.save(function(err) {
    if (err) {
      return next(err);
    }

    res.json({ comment });
  });
};

exports.getComments = function(req, res, next) {
  res.send({ token: tokenForUser(req.user), userId: req.user._id }); // req.user is available from the done callback in the localLogin
};
