const Tweet = require('../models/tweet.model');

module.exports.findAllTweets = (req, res) => {
    Tweet.find()
    .then(allTweets => res.json({tweets: allTweets}))
    .catch(err => res.json({error: err}));
}

module.exports.creatNewTweet = (req, res) => {
    Tweet.create(req.body)
    .then(newTweet => res.send({tweet: newTweet}))
    .catch(err => res.send({errors: err}));
}