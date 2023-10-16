import { useState, useEffect, useRef } from 'react';
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import CategoryList from '../../components/CategoryList/CategoryList';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function TopArticlesPage({ user, setUser }) {
  const [articles, setArticles] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  return (
    <main className="TopArticlesPage">
      <aside>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/saved-articles" className="button btn-sm">SAVED ARTICLES</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <ArticlesList
        articles={articles.filter(a => a.category.name === activeCat)}
        setArticles={setArticles}
      />
    </main>
  );
}