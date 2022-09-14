import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/home';
import Details from './Details/details';

function Router() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home}></Route>
            <Route path="/details" component={Details}></Route>
                        
        </BrowserRouter>
    )
}

export default Router;