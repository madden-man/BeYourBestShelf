import React from 'react';
import { useSelector } from 'react-redux';

import { HomeView } from '../views/home/HomeView';
import { DetailView } from '../views/detail/DetailView';

import './app.css'
import { Helmet } from 'react-helmet';

export const AppRouter = () => {
  const details = useSelector((state) => state.detailsReducer);

  return (
    <div className='app'>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </Helmet>
      {details?.volumeId ? <DetailView /> : <HomeView />}
    </div>
  );
};

