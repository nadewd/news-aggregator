import ArticleCard from '../ArticleCard/ArticleCard'

export default function ArticlesList({ articles }) {

    const topArticles = articles.map((article, id) => (

        <ArticleCard 
            article={article}
            title={article.title}
            source={article.source.name}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            key={id}
                         
        />
    ));

    return (
            <div className="TopArticles">
                {topArticles}
            </div>
        )
    }



