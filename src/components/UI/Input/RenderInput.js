import React from 'react';
import './Input.scss';

const RenderInput = ({
	className = '',
	onChange = null,
	onFocus = null,
	onBlur = null,
	onKeyDown = null,
	isPlaceholderActive = false,
	placeholder = '',
	value = ''
}) => (
	<div className="input-field">
		<input
			className={`input ${className}`}
			onChange={onChange}
			onKeyDown={onKeyDown}
			onFocus={onFocus}
			onBlur={onBlur}
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

export default RenderInput;