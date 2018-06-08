var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/denglu', function(req, res, next) {
  console.log('前端发送登录的数据是')
  console.log(req.body)
});
router.get('/api', function(req, res, next) {
 res.json({
 	name: 'sdf',
 	height: 166

 })
});

module.exports = router;
