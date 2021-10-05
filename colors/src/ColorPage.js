import React from 'react';
import { Redirect, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ColorPage = ({colors}) => {
    const { color } = useParams();
    const col = colors.find(c => c.name === color);
    if (!col) {
        return <Redirect to="/colors"/>
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: col.hex
        }}>
            Look at this color!!
            <Link to="/colors">Back</Link>
        </div>
    )
}

export default ColorPage;