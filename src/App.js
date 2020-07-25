import React, { useReducer, useEffect } from 'react';
import Layout from './hoc/Layout/Layout';
import Loading from './components/Loading/Loading';
import Gallery from './components/Gallery/Gallery';
import reducer from './reducer/reducer';
import { Context } from './context/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import storage from './storage/storage';
import { __INIT__, REMOVE_BIG_IMAGE_URL } from './reducer/types';
import Magnify from './components/Magnify/Magnify';

function App() {
	const [state, dispatch] = useReducer(reducer, {
		bigImageUrl: '',
		images: [],
	});

	useEffect(() => {
		dispatch({type: __INIT__});
	}, []);

	useEffect(() => {
		storage(state);
	}, [state]);

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
