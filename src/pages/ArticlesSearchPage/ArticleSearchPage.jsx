import { useState, useEffect, useRef } from 'react';
import './ArticleSearchPage.css';
import axios from 'axios';
import ArticlesList from '../../components/ArticlesList/ArticlesList';
import ArticleSearch from '../../components/ArticleSearch/ArticleSearch';

export default function ArticleSearchPage({ user, setUser }) {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('General');
    const newsAPIKey = process.env.REACT_APP_NEWSAPI_KEY

    useEffect(function() {
        const getArticles = async (category) => {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=General&apiKey=${newsAPIKey}`)
        setArticles(res.data.articles);
        console.log(res)
        }
        getArticles();
    }, []);
    

    return (
        <main className="HomePage">
            <ArticleSearch articles={articles} setArticles={setArticles} user={user} className="search"/>
            <ArticlesList 
                articles={articles} setArticles={setArticles}
            />
        </main>
  );
}

