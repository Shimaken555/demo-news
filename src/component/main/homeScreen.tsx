import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import ArticleList from '../article/articleList';
import { TbLoader } from 'react-icons/tb';
import Sidebar from '../sidebar/sidebar';
import { categoryList } from '../CategoryList';
import { HandleCategoryContextType } from '../../types';
import Header from '../header/header';
import newsSite from '../../newsSite.json';
import './screen.scss';

export const handleCategoryContext = createContext(
  {} as HandleCategoryContextType
);

const HomeScreen: React.FC = () => {
  const [category, setCategory] = useState(categoryList[0]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchArticleNews();
  }, [category]);

  const fetchArticleNews = async () => {
    try {
      setLoading(true);
      const newsKey = process.env.React_APP_NEWS_API_KEY;
      // const URL = `https://newsdata.io/api/1/news?apikey=${newsKey}&country=jp&category=${category}&language=jp&`;
      const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=${category}&apiKey=${newsKey}`;

      const res = await axios.get(URL);
      setArticles(res.data.results);

      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setError(err);
      console.error(err);
    }
  };

  console.log(articles);

  return (
    <>
      <handleCategoryContext.Provider
        value={{
          category: category,
          handleCategory: (category) => setCategory(category),
        }}
      >
        <Header screen="home" />
      </handleCategoryContext.Provider>

      <div className="screen">
        <div className="screen__left">
          <div className="screen__left__title title__blue">{category}</div>
          {loading ? (
            <h2>
              <TbLoader />
              データ取得中...
            </h2>
          ) : !error ? (
            <ArticleList articles={articles} />
          ) : (
            <h2>データ取得エラー</h2>
          )}
        </div>
        <div className="screen__right">
          <handleCategoryContext.Provider
            value={{
              category: category,
              handleCategory: (category) => setCategory(category),
            }}
          >
            <Sidebar />
          </handleCategoryContext.Provider>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
//
