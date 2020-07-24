import React, { useState } from 'react';
import './Input.scss';

function Input({className = null, onChange = null, placeholder = null}) {
	const [isPlaceholderActive, setIsPlaceholderActive] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const cls = [
		'input'
	];

	if (className) cls.push(className);

	const placeholderCls = [
		'input-field__placeholder'
	];

	if (isPlaceholderActive || inputValue) placeholderCls.push('input-field__placeholder_active');

	const focusHandler = () => {
		setIsPlaceholderActive(true);
	};

	const blurHandler = () => {
		setIsPlaceholderActive(false);
	};

	const changeHandler = (e) => { // временно, потом удалить
		if (onChange) onChange();
		setInputValue(e.target.value)
	};

	return (
		<div className="input-field">
			<input
				className={cls.join(' ')}
				onChange={changeHandler}
				onFocus={focusHandler}
				onBlur={blurHandler}
				value={inputValue}
				type="text"
			/>
			<span className={placeholderCls.join(' ')}>{placeholder}</span>
		</div>
	)
}

export default Input;