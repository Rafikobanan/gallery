import React from 'react';
import './Gallery.scss';
import { TransitionGroup } from 'react-transition-group';

const RenderGallery = ({images}) => (
	<TransitionGroup className="gallery">
		{images}
	</TransitionGroup>
);

export default RenderGallery;