import React from 'react';
import articleContent from './article-content';
import ArticleList from '../components/ArticleList';

const ArticleListPage = () => (

    <React.Fragment>
         <h1>Articles</h1>
         <ArticleList articles = {articleContent} />
    </ React.Fragment>
);

export default ArticleListPage;