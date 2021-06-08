import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [tweets, setTweets] = useState([]);

    const getAllTweets = async () => {
        try {
            const tweetList = await axios.get('http://localhost:8000/api/tweets');
            setTweets(tweetList.data.tweets);
            console.log("🚀 ~ file: Home.jsx ~ line 10 ~ getAllTweets ~ tweetList", tweetList)

        } catch (error) {
            return error;
        }
    }

    useEffect(() => {
        getAllTweets();
    }, []);

    return (
        <div>
            <h1>Mis Tweets:</h1>
            <ul>
                {
                    tweets.length > 0 ? (
                        tweets.map((tweet) => <li key={tweet._id}>{tweet.content}</li>)
                    ) : 'No ha creado ningún tweet'
                }

            </ul>
        </div>
    )

}

export default Home;

