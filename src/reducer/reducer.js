import { ADD_SOME_PICTURES, REMOVE_IMAGE, ADD_PICTURE, ADD_PICTURE_SIZE, REMOVE_BIG_IMAGE_URL, SET_BIG_IMAGE_URL } from "./types";

function id() {
	return '_' + Math.random().toString(36).substr(2, 9);
}

export default function(state, action) {
	let {images} = state;

	switch (action.type) {
		case ADD_SOME_PICTURES:
			const arr = action.payload;

			for (let i = 0; i < arr.length; i++) {
				arr[i].id = id();
				arr[i].width = arr[i].width || null;
				arr[i].height = arr[i].height || null;
			}

			return {
				...state,
				images: [...state.images, ...arr],
			};

		case ADD_PICTURE:
			const imageObj = {
				width: null,
				height: null,
				id: action.payload.id || id(),
				url: action.payload.url,
			};

			images.push(imageObj);

			return {
				...state,
				images: [...images],
			};

		case REMOVE_IMAGE:
			images = state.images.filter((item) => item.id !== action.payload);

			return {
				...state,
				images
			};

		case SET_BIG_IMAGE_URL:
			return {
				...state,
				bigImageUrl: action.payload
			};

		case REMOVE_BIG_IMAGE_URL:
			return {
				...state,
				bigImageUrl: ''
			};

		case ADD_PICTURE_SIZE:
			const {index, width, height} = action.payload;
			images[index].width = width;
			images[index].height = height;

			return {
				...state,
				images
			};

		default:
			return state;
	}
}