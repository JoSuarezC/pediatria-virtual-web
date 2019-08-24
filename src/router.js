import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './components/pages/not_found';
import Home from './components/pages/home';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;