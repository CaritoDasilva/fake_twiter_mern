import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import TweetService from '../services/tweetsService';
import { useHistory } from "react-router-dom";

const DetailTweet = () => {

    const { id } = useParams()
    const tweetService = new TweetService;
    const [tweet, setTweet] = useState({});
    const history = useHistory();

    const getTweetFromService = async () => {
        try {
            const tweet = await tweetService.getOneSingleTweet(id);
            setTweet(tweet);
        } catch (err) {
            return err;
        }

    }

    const addLike = async () => {
        try {
            const updatedLikes = await tweetService.updateTweet(id, { ...tweet, likes: tweet.likes + 1 })
            console.log("🚀 ~ file: DetailTweet.jsx ~ line 27 ~ addLike ~ updatedLikes", updatedLikes)
            setTweet({ ...tweet, likes: updatedLikes.likes })
        } catch (err) {
            return err;
        }
    }

    const deleteTweet = async () => {
        try {
            const deletTweetInDB = await tweetService.deleteTweet(id);
            deletTweetInDB && history.push('/');

        } catch (err) {

        }
    }

    useEffect(() => {
        getTweetFromService();
    }, [])

    console.log('soy el tweet => ', tweet);

    return (
        <div>
            {
                tweet.content ? <div className="tweet-container">
                    <h1>{tweet.content}</h1>
                    <h3>By: {tweet.author}</h3>
                    <p>Likes: {tweet.likes}</p>
                    <Button variant="info" onClick={addLike}>Agregar like</Button>
                    <Button variant="danger" onClick={deleteTweet}>Borrar Tweet</Button>

                </div> : 'No existe el tweet'
            }

        </div>
    )

}

export default DetailTweet;