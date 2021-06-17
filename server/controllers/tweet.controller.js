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

module.exports.getOneSingleTweet = (req, res) => {
    Tweet.findOne({_id: req.params.id})
    .then(tweet => res.json({tweet: tweet}))
    .catch(err => res.status(404).json(err));
}

module.exports.updateTweet = (req, res) => {
    Tweet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedTweet => res.json({tweet: updatedTweet}))
    .catch(err => res.status(404).json(err));
}

module.exports.deleteTweet = (req, res) => {
    Tweet.deleteOne({_id: req.params.id})
    .then(response => res.json({response: response}))
    .catch(err => res.json(err))
}