import "./SavedArticlesPage.css"
import { useState, useEffect } from "react";
import * as articlesAPI from "../../utilities/articles-api"
import SavedArticlesList from "../../components/SavedArticlesList/SavedArticlesList"


export default function SavedArticlesPage() {
    const [saved, setSaved] = useState([])
    useEffect(function () {
        async function getSaved() {
            const savedArticles = await articlesAPI.getAll()
            console.log(savedArticles)
            setSaved(savedArticles)
        }
        getSaved();
    }, [])

    return(
        <main className="SavedArticlesPage">
            <SavedArticlesList 
                saved={saved} setArticles={setSaved} 
            />
        </main> 
    );
}

