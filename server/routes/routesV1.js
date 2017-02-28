const express = require('express');
const router = express.Router();

const Comments = require('../controllers/comments');

router.post('/comment', Comments.addComment);
router.get('/comment', Comments.getComments);

module.exports = router;
