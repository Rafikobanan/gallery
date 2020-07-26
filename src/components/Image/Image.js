import React, { useState } from 'react';
import ImageLoad from './ImageLoad';
import RenderImage from './RenderImage';

function Image(props) {
	const [isLoad, setIsLoad] = useState(true);

	const loadHandler = (e) => {
		setIsLoad(false);
		if (props.onLoad) props.onLoad(e);
	};

	return isLoad ? 
		<ImageLoad
			className={props.className}
			children={props.children}
			onLoad={loadHandler}
			src={props.src}
		/> :
		<RenderImage
			className={props.className}
			onClick={props.onClick}
			children={props.children}
			style={props.style}
			src={props.src}
		/>
}

export default Image;