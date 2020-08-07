import React from 'react';
import './Magnify.scss';

const Magnify = ({src, onClick, className = '', ...rest}) => {
	if (!src) return null;

	return (
		<div {...rest} onClick={onClick} className={`magnify ${className}`}>
			<img src={src} className="magnify__image" alt=""/>
		</div>
	);
}

export default Magnify;