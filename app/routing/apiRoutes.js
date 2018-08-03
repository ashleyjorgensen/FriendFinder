//load data
var friends = require("../data/friends");

//routing
module.exports = function (app) {

    //GET route
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //POST route
    app.post("/api/friends", function (req, res) {
        friends = [];
        res.json(friends);
    });

    app.post("/api/newfriend", function (req, res) {
        console.log(req.body);
        friends.push(req.body);
        res.send(friends[0]);
        console.log(friends);
    });

    //for every ajax call you do on client side you need a correncesponding express route

    module.export = friends;

};