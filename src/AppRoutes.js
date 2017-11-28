import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './App';
import ContainerExampleText from './Components/Dashboard/Dashboard';
//import SidebarLeftPush from './Components/SidebarLeft/SidebarLeft';
const AppRoutes = () =>

    <App>
        <Switch>
            <Route path='/' component={ContainerExampleText}/>
        </Switch>
    </App>;

export default AppRoutes;