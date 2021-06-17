import axios from 'axios';

export default class TweetService {

    constructor() {}

    async getOneSingleTweet(id) {
        try {
            console.log(id)
            const tweet = await axios.get(`http://localhost:8000/api/tweets/${id}`)
            return tweet.data.tweet;
        } catch(err) {
            return err;
        }
    };

    async getAllTweets() {
         try {
            const tweetList = await axios.get('http://localhost:8000/api/tweets');
            console.log("🚀 ~ file: Home.jsx ~ line 10 ~ getAllTweets ~ tweetList", tweetList)
            return tweetList.data.tweets;

        } catch (error) {
            return error;
        }
    }

    async updateTweet(id, tweet) {
        try {
            const updatedTweet = await axios.put(`http://localhost:8000/api/tweets/update/${id}`, tweet)
            return updatedTweet.data.tweet;
        } catch(err) {
            return err;
        }
    }

    async deleteTweet(id) {
        try{
            const deleteTweet = await axios.delete(`http://localhost:8000/api/tweets/delete/${id}`)
            return deleteTweet.data.response;
        } catch(err) {
            return err;
        }
    }



};