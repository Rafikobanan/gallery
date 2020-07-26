import React, { useState } from 'react';
import RenderInput from './RenderInput';

function Input(props) {
	const [isPlaceholderActive, setIsPlaceholderActive] = useState(false);

	const focusHandler = () => {
		setIsPlaceholderActive(true);
	};

	const blurHandler = () => {
		if (props.value) return;
		setIsPlaceholderActive(false);
	};

	return (
		<RenderInput 
			className={props.className}
			onChange={props.onChange}
			placeholder={props.placeholder}
			onKeyDown={props.onKeyDown}
			value={props.value}
			isPlaceholderActive={isPlaceholderActive}
			onFocus={focusHandler}
			onBlur={blurHandler}
		/>
	);
}

export default Input;