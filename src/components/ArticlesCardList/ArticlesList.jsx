import { useState, useEffect } from 'react'
import axios from 'axios'
import ArticleCard from '../ArticleCard/ArticleCard'

export default function ArticlesList() {
    const [articles, setArticles] = useState([])
    const newsAPIKey = process.env.REACT_APP_NEWSAPI_KEY

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${newsAPIKey}`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles();
    })
    return (
        <div>
            {articles.map(article => {
                return(
                    <ArticleCard 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}


