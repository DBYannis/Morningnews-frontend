import { useEffect, useState } from 'react';
import Head from 'next/head';
import Article from './Article';
import TopArticle from './TopArticle';
import styles from '../styles/Home.module.css';
import bookmarks from '../reducers/bookmarks';

function Home() {
  const [articlesData, setArticlesData] = useState([]);
  const [topArticle, setTopArticle] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then(response => response.json())
      .then(data => {
        setTopArticle(data.articles[0]);
        setArticlesData(data.articles.filter((data, i) => i > 0));
      });
  }, []);

  const articles = articlesData.map((data, i) => {
    const isBookmarked = bookmarks.some(bookmark => bookmark.title === data.title)
    return <Article key={i} {...data} isBookmarked={isBookmarked}/>;
  });

  let topArticleCard;
  if (bookmarks.some(bookmark => bookmark.title === topArticle.title)){
    topArticleCard = <TopArticle {...topArticle} isBookmarked/>
  } else {
    topArticleCard = <TopArticle {...topArticle} isBookmarked= {false}/>
  }

  return (
    <div>
      <Head>
        <title>Morning News - Home</title>
      </Head>

      <TopArticle {...topArticle}/>

      <div className={styles.articlesContainer}>
        {articles}
      </div>
    </div>
  );
}

export default Home;
