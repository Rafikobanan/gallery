import React from 'react';
import './Layout.scss';

function Layout({children}) {
	return (
		<>
			<div className="container">
				{children}
			</div>
		</>
	);
}

export default Layout;