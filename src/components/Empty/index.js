import React from 'react';
import './Empty.scss';

const Empty = ({children}) => (
	<div className="empty"><span>{children}</span></div>
);

export default Empty;