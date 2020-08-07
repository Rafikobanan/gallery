import React from 'react';

const Icon = ({className = null, style = null, icon, ...rest}) => {
	return (
		<div {...rest}>
			<svg className={className} style={style}>
				<use xlinkHref={icon}></use>
			</svg>
		</div>
	);
}

export default Icon;