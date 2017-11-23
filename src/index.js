import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
//Routes
import AppRoutes from './AppRoutes';

//Assets
import './index.css';

ReactDOM.render(

    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root')
);
