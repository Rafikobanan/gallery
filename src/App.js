import React, { useReducer } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Context } from './context/context';
import reducer from './reducer/reducer';
import { REMOVE_BIG_IMAGE_URL, ADD_PICTURE } from './reducer/types';

import Layout from './hoc/Layout/Layout';

import Loading from './containers/Loading';
import Gallery from './containers/Gallery';

import Magnify from './components/Magnify';

import useDropZone from './hooks/dropzone.hook';
import { handleDrop } from './utils';

function App() {
	const [state, dispatch] = useReducer(reducer, {
		bigImageUrl: '',
		images: [],
	});

	useDropZone((e) => {
		handleDrop(e, (result) => {
			dispatch({type: ADD_PICTURE, payload: {url: result}});
		});
	});

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
