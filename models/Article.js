const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    date: {
        type: Date, 
        required: false
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    urlToImage: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);