import React, { useReducer, useEffect } from 'react';
import Layout from './hoc/Layout/Layout';
import Loading from './components/Loading/Loading';
import Gallery from './components/Gallery/Gallery';
import reducer from './reducer/reducer';
import { Context } from './context/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { REMOVE_BIG_IMAGE_URL, ADD_PICTURE, REMOVE_IMAGE } from './reducer/types';
import Magnify from './components/Magnify/Magnify';

function App() {
	const [state, dispatch] = useReducer(reducer, {
		bigImageUrl: '',
		images: [],
	});

	useEffect(() => {
		const preventDefaults = (e) => {
			e.preventDefault();
			e.stopPropagation();
		};

		const handleDrop = (e) => {
			const dt = e.dataTransfer;
			const files = Array.from(dt.files);

			const loadFile = (file) => {
				return new Promise((res, rej) => {
					const reader = new FileReader();
					reader.readAsDataURL(file);

					const id = Math.random();
					dispatch({type: ADD_PICTURE, payload: {url: 'placeholder', id}});

					reader.onloadend = function() {
						dispatch({type: REMOVE_IMAGE, payload: id});
						dispatch({type: ADD_PICTURE, payload: reader.result});
						res();
					};

					reader.onerror = function(e) {
						rej(e);
					}
				});
			};

			files.forEach(async (file) => await loadFile(file));
		};

		const events = ['dragenter', 'dragover', 'dragleave', 'drop'];

		events.forEach(eventName => {
			document.body.addEventListener(eventName, preventDefaults);
			document.body.addEventListener('drop', handleDrop);
		});

		return () => {
			events.forEach(eventName => {
				document.body.removeEventListener(eventName, preventDefaults);
				document.body.removeEventListener('drop', handleDrop);
			});
		}
	// eslint-disable-next-line
	}, []);

  return (
		<Context.Provider value={{state, dispatch}}>
			<Layout>
				<Loading />
				<Gallery />
			</Layout>
			<Magnify
				onClick={() => dispatch({type: REMOVE_BIG_IMAGE_URL})}
				src={state.bigImageUrl}
			/>
			<ToastContainer />
		</Context.Provider>
  );
}

export default App;
