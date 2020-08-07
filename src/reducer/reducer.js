import { 
	ADD_SOME_PICTURES,
	REMOVE_IMAGE,
	ADD_PICTURE,
	ADD_PICTURE_SIZE,
	REMOVE_BIG_IMAGE_URL,
	SET_BIG_IMAGE_URL
} from "./types";
import { id } from "../utils";

export default function(state, action) {
	switch (action.type) {
		case ADD_SOME_PICTURES:
			const arr = action.payload.map((item) => ({
				...item,
				id: id(),
				width: item.width || null,
				height: item.height || null
			}));

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

			return {
				...state,
				images: [...state.images, imageObj],
			};

		case REMOVE_IMAGE:
			return {
				...state,
				images: state.images.filter((item) => item.id !== action.payload)
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
			const {id: imageId, width, height} = action.payload;
			const images = [...state.images];

			const image = images.find((image) => image.id === imageId);

			image.width = width;
			image.height = height;

			return {
				...state,
				images
			};

		default:
			return state;
	}
}