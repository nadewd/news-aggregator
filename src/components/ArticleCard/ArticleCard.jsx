import './ArticleCard.css'
import * as articlesAPI from '../../utilities/articles-api'

export default function ArticleCard({ article, title, source, description, url, urlToImage }) {

  async function handleSaved(article) {
    await articlesAPI.addSavedArticle(article)
  }
  return (
      <div className="article-card">
          <div className='article-item'>
              <img className='article-img' src={urlToImage} alt={urlToImage} />
              <h3><a href={url}>{title}</a></h3>
              <h4>Source: {source}</h4>
              <p>{description}</p>
              <button onClick={() => handleSaved(article)}>Add to Saved Articles</button>
          </div>
      </div>
  )
}