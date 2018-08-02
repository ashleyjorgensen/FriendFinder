//dependencies 
var path=  require('path');

//routing 
module.exports = function(app) {

    //routes to survey
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    //catch all default to home page
    app.get(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    })
};