const TweetController = require('../controllers/tweet.controller');

module.exports = app => {
    app.get('/api/tweets', TweetController.findAllTweets);
    app.post('/api/tweets/new', TweetController.creatNewTweet);
}