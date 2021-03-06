export const preventDefaults = (e) => {
	e.preventDefault();
	e.stopPropagation();
};

export const handleDrop = (e, onloadend = null, onerror = null) => {
	const dt = e.dataTransfer;
	const files = Array.from(dt.files);

	files.forEach(async (file) => await loadFile(file, onloadend, onerror));
};

const loadFile = (file, onloadend, onerror) => {
	return new Promise((res, rej) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onloadend = function() {
			onloadend && onloadend(reader.result);
			res();
		};

		reader.onerror = function(e) {
			onerror && onerror(e);
			rej(e);
		}
	});
};