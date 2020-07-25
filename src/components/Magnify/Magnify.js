import React from 'react';
import './Magnify.scss';

function Magnify({src, onClick}) {
	if (!src) return '';

	return (
		<div onClick={onClick} className="magnify">
			<img src={src} className="magnify__image" alt=""/>
		</div>
	);
}

export default Magnify;