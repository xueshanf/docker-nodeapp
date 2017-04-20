var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
	  	title: 'Kubernetes Controlled Dockers Demo',
		hello: "Hello!",
	    container: process.env.HOSTNAME,
	    hostip: process.env.HOSTIP
	});
});

module.exports = router;
