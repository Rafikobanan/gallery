import React from 'react';

import Image from '../Image';
import Icon from '../Icon';

import './GalleryImage.scss';

const GalleryImage = ({
	widthInPercent = 0,
	url,
	onRemove = null,
	...rest
}) => (
	<Image
		{...rest}
		style={{flex: `1 1 ${widthInPercent}%`}}
		src={url}
	>
		<div className="image-hover">
			<Icon
				onClick={onRemove}
				className="image-hover__icon image-hover__close"
				icon="#close"
			/>
		</div>
	</Image>
)

export default GalleryImage;