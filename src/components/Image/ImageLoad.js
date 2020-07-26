import React from 'react';
import Loader from '../Loader/Loader';

const ImageLoad = ({
	className = '',
	children = null,
	onLoad = null,
	src = '',
}) => (
	<>
		<Loader className={className} children={children}/>
		<img onLoad={onLoad} className="image-load" src={src} alt=""/>
	</>
);

export default ImageLoad;