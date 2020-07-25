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
}) {
	const [isLoad, setIsLoad] = useState(true);

	const loadHandler = (e) => {
		setIsLoad(false);
		if (onLoad) onLoad(e);
	};

	return (
		<>
			{isLoad ? (
				<>
					<Loader className={className} children={children}/>
					<img onLoad={loadHandler} className="image-load" src={src} alt=""/>
				</>
			) : 
				<div
					onClick={onClick}
					className={`image-container ${className}`}
					style={{cursor: `${onClick ? 'pointer' : ''}`, ...style}}
				>
					<div
						className="image"
						style={{backgroundImage: `url(${src})`}}
					>
						{children}
					</div>
				</div>
				}
		</>
	);
}

export default Image;