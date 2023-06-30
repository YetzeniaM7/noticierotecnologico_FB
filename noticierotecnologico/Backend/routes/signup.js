var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.post('/', function(req, res, next) {
 console.log(req.body);
 res.send('receivied');
 //   res.render('signup', { title: 'Express' });
});
module.exports = router;