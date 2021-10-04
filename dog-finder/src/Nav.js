import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = ({dogs}) => {

    return (
        <div className="Nav">
            <NavLink to="/">Home</NavLink>
            {dogs.map(d => <NavLink to={`/dogs/${d.name}`}>{d.name}</NavLink>)}
        </div>
    )
}

export default Nav;