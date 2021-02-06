var express = require('express');
var router = express.Router();
var patty = require('../modules/index.js');

router.get('/', function (req, res) {
  patty.selectAll(function (data) {

    var burgerobject = {
      patty: data
    }
    res.render('index', burgerobject);
  });
});

router.get('/index', function (req, res) {
  patty.selectAll(function (data) {
    var hbsObject = { patty: data };

    res.render('index', hbsObject);
  });
});
router.post('/patty/create', function (req, res) {
  console.log(req.body)
  patty.insertOne(req.body.patty_name, function () {
    res.redirect('/index');
  });
});

router.post('/patty/eat/:id', function (req, res) {
  patty.updateOne(req.params.id, function () {
    res.redirect('/index');
  });
});

module.exports = router;
