import React, { useState } from 'react';
import ImageLoad from './ImageLoad';
import RenderImage from './RenderImage';

const Image = ({onLoad = null, children = null, className = '', src = '', ...rest}) => {
	const [isLoad, setIsLoad] = useState(true);

	const loadHandler = (e) => {
		setIsLoad(false);
		if (onLoad) onLoad(e);
	};

	return isLoad ? 
		<ImageLoad
			className={className}
			children={children}
			onLoad={loadHandler}
			src={src}
		/> :
		<RenderImage
			{...rest}
			className={className}
			children={children}
			src={src}
		/>
}

export default Image;