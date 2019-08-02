import React, { Component, Fragment } from "react";
import { Switch, Route, } from "react-router-dom";


import App from './container/App.js'
import burgerInfo from './container/burgerInfo'
import finishBurger from './container/finishBurger'


class Router extends Component {

   render() {
        
      return (
    <Fragment>
	    <Switch>
         <Route path="/" exact component={App} />
         <Route path="/burger/:name" exact component={burgerInfo} />
         <Route path="/finish" exact component={finishBurger} />
	    </Switch>
    </Fragment>
       )
   }

}

export default Router;

