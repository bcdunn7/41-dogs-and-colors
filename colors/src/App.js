import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
	const [colors, setColors] = useState([
		{name: 'blue', hex: '#4263f5'},
		{name: 'green', hex: '#42f548'},
		{name: 'pink', hex: '#f542da'}
	])

	const addColor = (newColor) => {
		setColors(colors => [{...newColor}, ...colors])
	}

	return (
		<div className="App">
			<BrowserRouter>
				<Routes colors={colors} addColor={addColor}/>
			</BrowserRouter>
		</div>
	);
}

export default App;
