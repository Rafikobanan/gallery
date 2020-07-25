import React, { useContext, useState, useEffect, useCallback } from 'react';
import './Gallery.scss';
import Image from '../Image/Image';
import { Context } from '../../context/context';
import useEventListener from '../../hooks/event.hook';
import Icon from '../Icon/Icon';
import { REMOVE_IMAGE, ADD_PICTURE_SIZE, SET_BIG_IMAGE_URL } from '../../reducer/types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const k = {
	big: 1,
	aboveMedium: 1.2,
	medium: 1.4,
	belowMedium: 1.6,
	small: 1.8,
};

function Gallery() {
	const {state, dispatch} = useContext(Context);
	const [coefficient, setCoefficient] = useState(k.big);

	const resizeHandler = useCallback(() => {
		const width = document.body.clientWidth;

		if (width >= 860 && coefficient !== k.big) {
			setCoefficient(k.big);
		}

		if (width < 860 && width >= 705 && coefficient !== k.aboveMedium) {
			setCoefficient(k.aboveMedium);
		}

		if (width < 705 && width >= 550 && coefficient !== k.medium) {
			setCoefficient(k.medium);
		}

		if (width < 550 && width >= 435 && coefficient !== k.belowMedium) {
			setCoefficient(k.belowMedium);
		}

		if (width < 435 && coefficient !== k.small) {
			setCoefficient(k.small);
		}
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

	useEventListener('resize', (e) => {
		resizeHandler();
	});

	const images = state.images.map((item, index) => {
		let widthInPercent = item.width / item.height * 20 * coefficient;

		if (!widthInPercent || widthInPercent === Infinity) widthInPercent = 0;

		return (
			<CSSTransition
				key={item.id}
				classNames="item"
				timeout={300}
			>
				<Image
					style={{flex: `1 1 ${widthInPercent}%`}}
					key={item.id}
					className="gallery__image-container"
					src={item.url}
					onLoad={(e) => loadHandler(e, index)}
					onClick={() => dispatch({type: SET_BIG_IMAGE_URL, payload: item.url})}
				>
					<div className="image-hover">
						<Icon
							onClick={(e) => removeHandler(e, item.id)}
							className="image-hover__icon image-hover__close"
							icon="#close"
						/>
					</div>
				</Image>
			</CSSTransition>
		);
	});

	return (
		<>
			<TransitionGroup className="gallery">
				{images}
			</TransitionGroup>

			{images.length === 0 ? 
				<div className="empty"><span>Здесь будут ваши картинки</span></div> :
				''
			}
		</>
	);
}

export default Gallery;