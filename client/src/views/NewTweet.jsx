import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const NewTweetForm = () => {
    const [tweetForm, setTweetform] = useState({
        content: '',
        author: ''
    })
    const history = useHistory()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('llegué')
        axios.post('http://localhost:8000/api/tweets/new', tweetForm)
            .then(() => history.push("/"))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        console.log(tweetForm)
    })

    return (
        <div className="tweet-form-container">
            <h1>Mi nuevo tweet:</h1>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" name="author" value={tweetForm.author} onChange={(e) => setTweetform({ ...tweetForm, [e.target.name]: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} name="content" value={tweetForm.content} onChange={(e) => setTweetform({ ...tweetForm, [e.target.name]: e.target.value })} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>


        </div>
    )
}

export default NewTweetForm;