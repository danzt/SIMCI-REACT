import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './App';
import Menu from './Components/Menu/Menu';
import SidebarLeftOverlay from './Components/SidebarLeft/SidebarLeft';
const AppRoutes = () =>

    <App>
        <Switch>
            <Route exact path='/' component={Menu}/>
            <Route exact path='/' component={SidebarLeftOverlay}/>
        </Switch>
    </App>;

export default AppRoutes;