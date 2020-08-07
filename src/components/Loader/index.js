import React from 'react';
import './Loader.scss';

const Loader = ({children = null, className = '', ...rest}) => {
	return (
		<div {...rest} className={`loader ${className}`}>
			<div className="lds-dual-ring"></div>
			{children}
		</div>
	);
}

export default Loader;