import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Navbar from './Navbar';
import Footer from './Footer';
import { Redirect, Route, Switch,HashRouter } from 'react-router-dom';


const App = () => {
    return(
        <HashRouter>

        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Redirect to="/" />
        </Switch>
        <Footer/>
       
         
        </HashRouter>
    );

};

export default App;
