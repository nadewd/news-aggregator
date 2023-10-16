import { useState, useEffect } from 'react'
import axios from 'axios'
import ArticleCard from '../../components/ArticleCard/ArticleCard'

export default function ArticlesCardList() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=football&apiKey=2f7a9f9c275843cc87bf3b72ba9924ba`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles();
    }, [])
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
