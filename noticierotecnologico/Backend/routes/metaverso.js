var express = require('express');
var router = express.Router();

router.get('/',function(req,res, next){
    res.render('metaverso',{title: express});
})

module.exports = router;

