var express = require('express');
var router =express.Router();
var patty = require('../models/patty.js');

router.get('/', function(req,res)
{
    res.redirect('\index');
});

router.get('/index', function(req,res)
{
    pattie.selectAll(function(data)
    {
        var hbsObject = { patty: data };
    
    res.render('index', hbsObject);
  });
});
router.post('/patty/create', function (req, res) 
{
  patty.insertOne(req.body.patty_name, function() 
  {
    res.redirect('/index');
  });
});

router.post('/patty/eat/:id', function (req, res) 
{
  patty.updateOne(req.params.id, function() 
  {
    res.redirect('/index');
  });
});

module.exports = router;
