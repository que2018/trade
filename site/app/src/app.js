import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';

ReactDOM.render(
	 <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
	, document.getElementById('app'));





