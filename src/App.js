import React from 'react';
import Home from './component/Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';
import CountryDetails from './component/CountryDetails/CountryDetails';


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                     <Home/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path='/countyDetail/:country'>
                    <CountryDetails/>
                </Route>
                <Route path="*">
                    <NoMatch/>
                </Route>

            </Switch>
        </Router>

    );
}

export default App;