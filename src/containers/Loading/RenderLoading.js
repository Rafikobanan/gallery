import React from 'react';
import Input from '../../components/Input';
import './Loading.scss';

const RenderLoading = ({
	onChangeTextInput = null,
	onChangeFileInput = null,
	...rest
}) => (
	<div className="loading">
		<Input
			{...rest}
			className="loading__input"
			placeholder="Вставьте ссылку"
			onChange={onChangeTextInput}
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
