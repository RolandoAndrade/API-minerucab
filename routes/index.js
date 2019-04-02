let express = require('express');
let router = express.Router();

let db=require('../queries.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/users',db.getUsers);

module.exports = router;
