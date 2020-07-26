import React from 'react';
import './Image.scss';

const RenderImage = ({
	className = '',
	onClick = null,
	children = null,
	style = {},
	src = ''
}) => (
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
);

export default RenderImage;