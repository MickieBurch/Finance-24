import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppRoutes from './components/routes'; // Adjust the path if needed
import LandingPage from './components/Landing_page';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
       <AppRoutes />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
