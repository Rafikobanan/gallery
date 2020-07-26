import React from 'react';
import Icon from '../Icon/Icon';
import Image from '../Image/Image';

const GalleryImage = ({
	widthInPercent = 0,
	url,
	onLoad = null,
	onClick = null,
	onRemove = null,
}) => {
	return (
		<Image
			style={{flex: `1 1 ${widthInPercent}%`}}
			className="gallery__image-container"
			src={url}
			onLoad={onLoad} 
			onClick={onClick}
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
}

export default GalleryImage;