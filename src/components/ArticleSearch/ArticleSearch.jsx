import { useState } from "react";
import './ArticleSearch.css';
import axios from "axios"

export default function ArticleSearch({ articles, setArticles, user }) {
    const [input, setInput] = useState("");
    const newsAPIKey = process.env.REACT_APP_NEWSAPI_KEY

    const getArticles = async (value) => {
        const res = await axios.get(`https://newsapi.org/v2/everything?q=${value}&pageSize=20&apiKey=${newsAPIKey}`);
        setArticles(res.data.articles);
        console.log(res)
    };
    
    const handleChange = (value) => {
        setInput(value)
        getArticles(value)
    }

    return (
        <div className="SearchArea">
            Keyword Search: 
            <input
                value={input}
                onChange={(evt) => handleChange(evt.target.value)}
                />
        </div>
    );
};