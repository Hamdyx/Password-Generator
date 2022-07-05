import React from 'react';
import { useState } from 'react';

const App: React.FC = () => {
	const [passLen, setPassLen] = useState(6);
	const [passStr, setPassStr] = useState('');
	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const inputLen = parseInt(ev.target.value);
		setPassLen(inputLen);
		generatePass(inputLen);
	};
	const generatePass = (l: number) => {
		//* symbol => 33 | symbol => 47
		//* number => 48 | number => 57
		//* symbol => 58 | symbol => 64
		//* A => 65 | Z => 90
		//* symbol => 91 | symbol => 96
		//* a => 97 | z => 122
		//* symbol => 123 | symbol => 126
		const passArr = Array(l);
		for (let i = 0; i < passArr.length; i++) {
			const randNumber = Math.random() * 93; //* 126 - 33
			const randCode = Math.floor(randNumber) + 33;
			const randChar = String.fromCharCode(randCode);
			passArr[i] = randChar;
		}
		setPassStr(passArr.join(''));
	};

	return (
		<div className="App">
			<div className="App-header">
				<h2>Password Generator</h2>
			</div>
			<div className="password_length-container">
				<label htmlFor="password_length">Password Length</label>
				<input
					type="number"
					id="password_length"
					onChange={handleChange}
					value={passLen}
					min={6}
					max={16}
				/>
			</div>
			<div className="output-password">
				<h3>Generated Password</h3>
				<h4>{passStr}</h4>
			</div>
		</div>
	);
};

export default App;
