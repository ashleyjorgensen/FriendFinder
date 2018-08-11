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
        var userData = req.body;

        var bestFriend ={
            name:"",
            friendpoints:1000
        }

        var  totalDifference

        //for loop over friends

            //currentFriend variable

            //for loop over currentFriend.scores
                // where the math happens
                // use Math.abs to calculate the difference between each index of  userData scores and current Friend sccores and add diff to totalDifference

             //
             
             if totalDifference < bestFriend.friendpoints

             bestFriend.name = currentFriend.name


        friends.push(req.body);
        res.json(bestFriend);
        // console.log(friends);
    });

    //for every ajax call you do on client side you need a correncesponding express route

    module.export = friends;

};