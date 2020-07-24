import React from 'react';
import './Loading.scss';
import Input from '../UI/Input/Input';

function Loading() {
	return (
		<div className="loading">
			<Input 
				className="loading__input"
				placeholder="Вставьте ссылку для загрузки картинки или загрузите JSON"
			/>
			<label htmlFor="upload" className="loading__label">Загрузить</label>
			<input type="file" className="loading__upload" id="upload"/>
		</div>
	);
}

export default Loading;