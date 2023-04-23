import React from 'react';
import { Link } from 'react-router-dom';
import './pagesStyles/NoPage.css'

const NoPage = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 - Страница не найдена</h1>
      <p className="not-found__text">К сожалению, запрашиваемая страница не найдена.</p>
      <Link to="/" className="not-found__link">Вернуться на главную страницу</Link>
    </div>
  );
}


export default NoPage;

