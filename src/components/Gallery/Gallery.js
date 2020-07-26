import React, { useContext, useState, useEffect, useCallback } from 'react';
import GalleryImage from './GalleryImage';
import RenderGallery from './RenderGallery';
import GalleryEmpty from './GalleryEmpty';
import useEventListener from '../../hooks/event.hook';
import { Context } from '../../context/context';
import { REMOVE_IMAGE, ADD_PICTURE_SIZE, SET_BIG_IMAGE_URL } from '../../reducer/types';
import {k, calculateCoefficient} from './utils';
import { CSSTransition } from 'react-transition-group';

function Gallery() {
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

	const loadHandler = (e, index) => {
		const images = state.images;
		if (images[index].width === null || images[index].height === null) {
			dispatch({type: ADD_PICTURE_SIZE, payload: {
				index: index,
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

	const images = state.images.map((item, index) => {
		let widthInPercent = item.width / item.height * 20 * coefficient;

		if (!widthInPercent || widthInPercent === Infinity) widthInPercent = 0;

		return (
			<CSSTransition
				classNames="item"
				timeout={300}
				key={item.id}
			>
				<GalleryImage 
					widthInPercent={widthInPercent}
					url={item.url}
					onLoad={(e) => loadHandler(e, index)}
					onClick={() => dispatch({type: SET_BIG_IMAGE_URL, payload: item.url})}
					onRemove={(e) => removeHandler(e, item.id)}
				/>
			</CSSTransition>
		);
	});

	return images.length ? 
		<RenderGallery images={images}/> : 
		<GalleryEmpty />;
}

export default Gallery;