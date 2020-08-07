import React, { useState } from 'react';
import './Input.scss';

const Input = ({value = '', className = '', placeholder = '', ...rest}) => {
	const [isPlaceholderActive, setIsPlaceholderActive] = useState(false);

	const focusHandler = () => {
		setIsPlaceholderActive(true);
	};

	const blurHandler = () => {
		if (value) return;
		setIsPlaceholderActive(false);
	};

	return (
		<div className="input-field">
			<input
				{...rest}
				className={`input ${className}`}
				onFocus={focusHandler}
				onBlur={blurHandler}
				value={value}
				type="text"
			/>
			<span
				className={`input-field__placeholder ${isPlaceholderActive ? 'input-field__placeholder_active' : ''}`}
			>
				{placeholder}
			</span>
		</div>
	);
}

export default Input;
