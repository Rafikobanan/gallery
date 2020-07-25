import React from 'react';

function Icon({onClick = null, className = null, style = null, icon}) {
	return (
		<div onClick={onClick}>
			<svg className={className} style={style}>
				<use xlinkHref={icon}></use>
			</svg>
		</div>
	);
}

export default Icon;