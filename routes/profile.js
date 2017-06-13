var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 const context = {
  title: 'profile',
  name: 'sebastian',
  age: '13',
  position: 'student',
}
res.render('profile', context);
});

module.exports = router;
