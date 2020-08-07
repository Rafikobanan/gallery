import React from 'react';
import Loader from '../Loader';

const ImageLoad = ({
	className = '',
	children = null,
	...rest
}) => (
	<>
		<Loader className={className} children={children}/>
		<img {...rest} className="image-load" alt=""/>
	</>
);

export default ImageLoad;