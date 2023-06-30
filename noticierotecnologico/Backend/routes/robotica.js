var express= require('express');
var router = express.Router();

//Get Robotica

router.get('/', function(req,res, next){
    res.render('robotica', {title: express});
}
)
module.exports = router
