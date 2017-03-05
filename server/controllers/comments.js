const Comment = require('../models/comment');

module.exports = {
  addComment: function(req, res, next) {
    const email = req.body.email;
    const message = req.body.message;
    const hash = req.body.hash;

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
  },

  getComments: function(req, res, next) {
    Comment.find({}, function(err, comments) {
      res.send({ comments });
    });
  }
};
