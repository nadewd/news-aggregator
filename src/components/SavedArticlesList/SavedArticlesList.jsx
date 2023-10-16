import "./SavedArticlesList.css";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function SavedArticlesList({ saved }) {

    const savedArticles = saved.map((article, id) => (

        <ArticleCard 
            title={article.title}
            source={article.source.name}
            author={article.author}
            date={article.date}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            key={id}
                         
        />
    ));

    return(
            <div>
                {savedArticles}
            </div>
        )
    }