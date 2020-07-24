import React from 'react';
import './Image.scss';

function Image({className = null, src = null, alt = null, style = null}) {
	const cls = [
		'image',
	];

	if (className) cls.push(className);

	return (
		<div
			className={cls.join(' ')}
			style={{backgroundImage: `url(${src})`, ...style}}
		>
		</div>
	);
}

export default Image;