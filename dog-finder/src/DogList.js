import React from 'react';
import { Link } from 'react-router-dom';

const DogList = ({names}) => {

    return (
        <div>
            <h2>List o' Dogs</h2>
            <ul>
                {names.map(n => <li>Go to: <Link to={`/dogs/${n}`}>{n}</Link></li>)}
            </ul>
        </div>
    )
}

export default DogList;