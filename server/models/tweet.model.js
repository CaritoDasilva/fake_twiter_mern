const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'No puede enviar un tweet vacío'],
        maxLength: [150, 'No debe excer los 150 caracteres']
    },
    author: {
        type: String,
        required: [true, 'No se puede crear un tweet sin autor']
    },
    likes: {
        type: Number,
        default: 0
    },    
},
{timestamps: true}
);

const Tweet = mongoose.model('Tweet', TweetSchema);

module.exports = Tweet;