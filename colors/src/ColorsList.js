import React from 'react';
import { Link } from 'react-router-dom';

const ColorsList = ({colors}) => {
    return (
        <div>
            <h1>The Color Factory</h1>
            <h2>Colors:</h2>
            <ul>
                {colors.map(c => <li><Link to={`/colors/${c.name}`}>{c.name}</Link><div style={{backgroundColor: c.hex, width: '20px', height: '20px'}}></div></li>)}
            </ul>
            <h3>Want a new color?</h3>
			<Link to="/colors/new">New Color!</Link>
        </div>
    )
}

export default ColorsList;