const Article = require('../../models/Article');

module.exports = {
    index,
    create,
};

async function index(req, res) {
    const saved = await Article.find({ user: req.user._id })
    console.log(saved)
    res.json( saved );
}

async function create(req, res) {
    try {
        console.log(req.body)
        const articleData = {
            title: req.body.title,
            source: req.body.source.name,
            author: req.body.author,
            date: req.body.publishedAt.localDate,
            description: req.body.description,
            url: req.body.url, 
            urlToImage: req.body.urlToImage,
            user: req.user._id
        }
        const savedArticle = await Article.create(articleData)
        res.json(articleData)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}