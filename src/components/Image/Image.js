import React, { useState } from 'react';
import './Image.scss';
import Loader from '../Loader/Loader';

function Image({
	className = '',
	src = null,
	style = null,
	children = null,
	onLoad = null,
	onClick = null,
	withLoader = true
}) {
	const [isLoad, setIsLoad] = useState(withLoader);

	const loadHandler = (e) => {
		if (!withLoader) return;
		setIsLoad(false);
		if (onLoad) onLoad(e);
	};

	return (
		<>
			<div
				onClick={onClick}
				className={`image-container ${className}`}
				style={{cursor: `${onClick ? 'pointer' : ''}`, ...style}}
			>
				<div
					className="image"
					style={{backgroundImage: `url(${src})`}}
				>
					<img onLoad={loadHandler} className={`${isLoad ? 'image__load' : 'image__hidden'}`} src={src} alt=""/>
					{children}
					{isLoad ? <Loader/> : ''}
				</div>
			</div>
		</>
	);
}

export default Image;