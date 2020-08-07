import React, { useContext, useState } from 'react';

import { Context } from '../../context/context';
import { ADD_SOME_PICTURES, ADD_PICTURE } from '../../reducer/types';

import RenderLoading from './RenderLoading';

import { notify } from '../../utils';

const Loading = () => {
	const {dispatch} = useContext(Context);
	const [value, setValue] = useState('');

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
			dispatch({type: ADD_PICTURE, payload: {url: value}});
		}
	};

	const changeInputHandler = (e) => {
		setValue(e.target.value.trim());
	};

	return (
		<RenderLoading 
			onKeyDown={keyDownHandler}
			onChangeTextInput={changeInputHandler}
			onChangeFileInput={(e) => changeFileHandler(e.target)}
			value={value}
		/>
	);
}

export default Loading;
