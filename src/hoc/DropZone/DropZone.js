import React, { useEffect, useContext } from "react";
import { Context } from "../../context/context";
import { ADD_PICTURE } from "../../reducer/types";
import { preventDefaults, handleDrop } from "./utils";

function DropZone({children}) {
	const {dispatch} = useContext(Context);

	useEffect(() => {
		const handle = (e) => {
			handleDrop(e, (result) => {
				dispatch({type: ADD_PICTURE, payload: {url: result}});
			});
		};

		const events = ['dragenter', 'dragover', 'dragleave', 'drop'];

		events.forEach(eventName => {
			document.body.addEventListener(eventName, preventDefaults);
			document.body.addEventListener('drop', handle);
		});

		return () => {
			events.forEach(eventName => {
				document.body.removeEventListener(eventName, preventDefaults);
				document.body.removeEventListener('drop', handle);
			});
		}
	// eslint-disable-next-line
	}, []);

	return <>{children}</>;
}

export default DropZone;