import React from 'react';
import Input from '../UI/Input/Input';
import './Loading.scss';

const RenderLoading = ({
	onKeyDown = null,
	onChangeTextInput = null,
	onChangeFileInput = null,
	value = '',
}) => (
	<div className="loading">
		<Input 
			className="loading__input"
			placeholder="Вставьте ссылку"
			onKeyDown={onKeyDown}
			onChange={onChangeTextInput}
			value={value}
		/>
		<label htmlFor="upload" className="loading__label">Загрузить</label>
		<input
			type="file"
			className="loading__upload"
			id="upload"
			onChange={onChangeFileInput}
		/>
	</div>
);

export default RenderLoading;