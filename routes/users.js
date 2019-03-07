var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/a', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('users', { title: 'aaa' });
});
router.get('/b', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('users', { title: 'bbb' });
});

module.exports = router;
