import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from './DogList';
import DogDetails from './DogDetails';

const Routes = ({dogs}) => {

    return (
        <Switch>
          <Route exact path="/dogs">
            <DogList names={dogs.map(d=>d.name)}/>
          </Route>
          <Route exact path="/dogs/:name">
            <DogDetails dogs={dogs}/>
          </Route>
          <Redirect to="/dogs"/>
        </Switch>
    )
}

export default Routes;