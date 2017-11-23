import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './App';
import MenuExampleSecondary from './Components/Menu/Menu';
//import SidebarLeftPush from './Components/SidebarLeft/SidebarLeft';
const AppRoutes = () =>

    <App>
        <Switch>
            <Route path='/' component={MenuExampleSecondary}/>
        </Switch>
    </App>;

export default AppRoutes;