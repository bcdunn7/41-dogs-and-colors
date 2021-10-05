import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ColorsList from './ColorsList';
import NewColorForm from './NewColorForm';
import ColorPage from './ColorPage';

const Routes = ({colors, addColor}) => {
    return (
        <Switch>
            <Route exact path="/colors">
                <ColorsList colors={colors}/>
            </Route>
            <Route exact path="/colors/new">
                <NewColorForm addColor={addColor}/>
            </Route>
            <Route exact path="/colors/:color">
                <ColorPage colors={colors}/>
            </Route>
            <Redirect to="/colors"/>
        </Switch>
    )
}

export default Routes;