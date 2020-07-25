import React from 'react';
import './Loader.scss';

function Loader({children = null, className = ''}) {
	return (
		<div className={`loader ${className}`}>
			<div className="lds-dual-ring"></div>
			{children}
		</div>
	);
}

export default Loader;