const TweetController = require('../controllers/tweet.controller');

module.exports = app => {
    app.get('/api/tweets', TweetController.findAllTweets);
    app.put('/api/tweets/update/:id', TweetController.updateTweet);
    app.get('/api/tweets/:id', TweetController.getOneSingleTweet);
    app.post('/api/tweets/new', TweetController.creatNewTweet);
}