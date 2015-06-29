// Load the Donor Model
var Donor = require('./models/donor');

// expose the routes to our app with module.exports
module.exports = function(app) {

    // get all the donors
    app.get('/api/donors', function( req, res ) {

        Donor.find(function(err, donors) {

            if(err)
                res.send(err);

            res.json(donors);
        });
    });

    app.post('/api/donors', function( req, res){

        // Create a donor
        Donor.create({
            name: req.body.text,
            email: req.body.email,
            phone: req.body.phone,
            donation: req.body.donation,
            donationDate: req.body.donationDate
        }, function(err, donors) {
            if(err)
                res.send(err);

            Donor.find(function(err, donors){
                if(err)
                    res.send(err)
                res.json(donors);
            });
        });
    });

    app.get('*', function(req, res){
        res.sendfile('./public/index.html'); // load the single view file for all other routes
    })
};

