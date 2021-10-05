import React, { useState } from 'react';
import { useHistory } from 'react-router';

const NewColorForm = ({addColor}) => {
    const history = useHistory();
    const INITIAL_STATE = {
        name: '',
        hex: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData);
        setFormData(INITIAL_STATE);
        history.push('/');
    }

    return (
        <div>
            <h2>Pick a new color!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    onChange={e => handleChange(e)}
                    value={formData.name}
                    placeholder="New Color Name"
                />
                <input 
                    name="hex"
                    type="color"
                    onChange={e => handleChange(e)}
                    value={formData.hex}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewColorForm;