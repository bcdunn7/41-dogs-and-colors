import React from 'react';
import { useParams } from 'react-router-dom';

const DogDetails = ({dogs}) => {
    const { name } = useParams();
    const dog = dogs.find(d => d.name === name);

    return (
        <div>
            <h1>{name}</h1>
            <img alt="dog" src={`${dog.src}`}></img>
            <p>Age: {dog.age}</p>
            <h4>Facts about {name}</h4>
            <ul>
                {dog.facts.map(f => <li>{f}</li>)}
            </ul>
        </div>
    )
}

export default DogDetails;