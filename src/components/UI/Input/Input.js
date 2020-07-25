import React, { useState } from 'react';
import './Input.scss';

function Input({className = null, onChange = null, placeholder = null, onKeyDown = null, value = null}) {
	const [isPlaceholderActive, setIsPlaceholderActive] = useState(false);

	const placeholderCls = [
		'input-field__placeholder'
	];

	if (isPlaceholderActive || value) placeholderCls.push('input-field__placeholder_active');

	const focusHandler = () => {
		setIsPlaceholderActive(true);
	};

	const blurHandler = () => {
		setIsPlaceholderActive(false);
	};

	return (
		<div className="input-field">
			<input
				className={`input ${className}`}
				onChange={onChange}
				onKeyDown={onKeyDown}
				onFocus={focusHandler}
				onBlur={blurHandler}
				value={value}
				type="text"
			/>
			<span className={placeholderCls.join(' ')}>{placeholder}</span>
		</div>
	)
}

export default Input;