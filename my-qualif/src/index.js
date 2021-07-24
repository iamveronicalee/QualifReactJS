import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtistPage from './pages/ArtistPage';
import DetailPage from './pages/DetailPage';
import FavoritePage from './pages/FavoritePage';
ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/artist/:artist">
          <ArtistPage />
        </Route>
        <Route exact path="/detail/:id">
          <DetailPage />
        </Route>
        <Route exact path="/favorite">
          <FavoritePage />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
