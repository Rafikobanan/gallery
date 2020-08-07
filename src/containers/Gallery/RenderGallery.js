import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import './Gallery.scss';

const RenderGallery = ({images}) => (
	<TransitionGroup className="gallery">
		{images}
	</TransitionGroup>
);

export default RenderGallery;