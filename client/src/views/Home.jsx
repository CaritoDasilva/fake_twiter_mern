import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import TweetService from '../services/tweetsService';
const Home = () => {
    const [tweets, setTweets] = useState([]);
    const tweetService = new TweetService;

    const getAllTweets = async () => {
        const tweets = await tweetService.getAllTweets()
        setTweets(tweets);
    }

    useEffect(() => {
        getAllTweets();
    }, []);

    return (
        <div>
            <h1>Mis Tweets:</h1>
            <div className="tweets-container">
                <ul>
                    {
                        tweets.length > 0 ? (
                            tweets.map((tweet) => <Link to={`/details/${tweet._id}`}>
                                <li key={tweet._id} className="card">{tweet.content}</li>
                            </Link>)
                        ) : 'No ha creado ningún tweet'
                    }

                </ul>
                <Link to="/new">
                    <button type="button" class="btn btn-primary">Nuevo Tweet</button>
                </Link>

            </div>
        </div>
    )

}

export default Home;

