import { useEffect, useRef } from "react";

const useDropZone = (handler, element = document.body) => {
	const savedHandler = useRef();

	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		const isSupported = element && element.addEventListener;
		if (!isSupported) return;
		
		const eventListener = (e) => savedHandler.current(e);

		const preventDefaults = (e) => {
			e.preventDefault();
			e.stopPropagation();
		};

		const events = ['dragenter', 'dragover', 'dragleave', 'drop'];

		events.forEach(eventName => {
			element.addEventListener(eventName, preventDefaults);
			element.addEventListener('drop', eventListener);
		});

		return () => {
			events.forEach(eventName => {
				element.removeEventListener(eventName, preventDefaults);
				element.removeEventListener('drop', eventListener);
			});
		}
	}, [element]);
}

export default useDropZone;
