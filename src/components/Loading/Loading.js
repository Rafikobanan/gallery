import React, { useContext, useState } from 'react';
import './Loading.scss';
import Input from '../UI/Input/Input';
import { toast } from 'react-toastify';
import { Context } from '../../context/context';
import { ADD_SOME_PICTURES, ADD_PICTURE } from '../../reducer/types';

function Loading() {
	const {dispatch} = useContext(Context);
	const [value, setValue] = useState('');

	const notify = (text) => {
		toast.error(text, {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	const changeFileHandler = (input) => {
		let file = input.files[0];

		if (!file) return;

		if (file.type !== 'application/json') {
			notify('Требуемый формат файла - JSON!');
			return;
		}

		const reader = new FileReader();

		reader.readAsText(file);

		reader.addEventListener('load', () => {
			const result = JSON.parse(reader.result);

			if (!result.galleryImages) {
				notify('Не существует массива galleryImages!');
				return;
			}

			const data = [];
			for (let i = 0; i < result.galleryImages.length; i++) {
				let imageObj = result.galleryImages[i];

				if (typeof imageObj === 'string') imageObj = {url: result.galleryImages[i]};

				data.push(imageObj);
			}

			dispatch({type: ADD_SOME_PICTURES, payload: data});
		});

		reader.addEventListener('error', () => {
			notify(reader.error);
		});
	};

	const keyDownHandler = (e) => {
		if (e.key.toUpperCase() === 'ENTER') {
			if (!value) {
				notify('Вставьте ссылку');
				return;
			}
			setValue('');
			dispatch({type: ADD_PICTURE, payload: value});
		}
	};

	const changeInputHandler = (e) => {
		setValue(e.target.value.trim());
	};

	return (
		<div className="loading">
			<Input 
				className="loading__input"
				placeholder="Вставьте ссылку"
				onKeyDown={keyDownHandler}
				onChange={changeInputHandler}
				value={value}
			/>
			<label htmlFor="upload" className="loading__label">Загрузить</label>
			<input
				type="file"
				className="loading__upload"
				id="upload"
				onChange={(e) => changeFileHandler(e.target)}
			/>
		</div>
	);
}

export default Loading;