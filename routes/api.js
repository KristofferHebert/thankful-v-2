/**
 * Twitter Configuration
 */
var Twit = require('twit'),
config = require('../config')
    T = new Twit(config);


/*
 * Serve JSON to our AngularJS client
 */

module.exports.searchThankful = function (req, res) {
    T.get('search/tweets', { q: 'thankful', language: 'en', src: 'typd', count: 30 }, function(err, data, response) {
        res.json({ data: data });
    });
}