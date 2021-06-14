import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
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
            <div className="tweets-container">
                <ul>
                    {
                        tweets.length > 0 ? (
                            tweets.map((tweet) => <li key={tweet._id} className="card">{tweet.content}</li>)
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

