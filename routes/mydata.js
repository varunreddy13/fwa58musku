var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Varun Reddy Musku' });
});

module.exports = router;

// Make changes so that the comment is correct. Change the line with the render so that 
// it uses mydata instead of index and then change the title from ‘Express’ to your full 
// name. 