import React, { useContext, useState, useEffect, useCallback } from 'react';

import { CSSTransition } from 'react-transition-group';

import { Context } from '../../context/context';
import { REMOVE_IMAGE, ADD_PICTURE_SIZE, SET_BIG_IMAGE_URL } from '../../reducer/types';

import RenderGallery from './RenderGallery';

import Empty from '../../components/Empty';
import GalleryImage from '../../components/GalleryImage';

import useEventListener from '../../hooks/event.hook';
import {k, calculateCoefficient} from './utils';

const Gallery = () => {
	const {state, dispatch} = useContext(Context);
	const [coefficient, setCoefficient] = useState(k.big);

	const resizeHandler = useCallback(() => {
		const width = document.body.clientWidth;
		const c = calculateCoefficient(width);
		if (c !== coefficient) setCoefficient(c);
	}, [coefficient]);

	const removeHandler = (e, id) => {
		e.stopPropagation();
		dispatch({type: REMOVE_IMAGE, payload: id});
	};

	const loadHandler = (e, id) => {
		const image = state.images.find((image) => image.id === id);

		if (image.width === null || image.height === null) {
			dispatch({type: ADD_PICTURE_SIZE, payload: {
				id,
				width: e.target.clientWidth,
				height: e.target.clientHeight
			}});
		}
	};

	useEffect(() => {
		resizeHandler();
	}, [resizeHandler]);

	useEventListener('resize', () => {
		resizeHandler();
	});

	const images = state.images.map((item) => {
		let widthInPercent = item.width / item.height * 20 * coefficient;

		if (!widthInPercent || widthInPercent === Infinity) widthInPercent = 0;

		return (
			<CSSTransition
				classNames="item"
				timeout={300}
				key={item.id}
			>
				<GalleryImage
					className="gallery__image-container"
					widthInPercent={widthInPercent}
					url={item.url}
					onLoad={(e) => loadHandler(e, item.id)}
					onClick={() => dispatch({type: SET_BIG_IMAGE_URL, payload: item.url})}
					onRemove={(e) => removeHandler(e, item.id)}
				/>
			</CSSTransition>
		);
	});

	return images.length ? 
		<RenderGallery images={images}/> : 
		<Empty>Здесь будут ваши картинки</Empty>;
}

export default Gallery;
