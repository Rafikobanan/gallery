import React, { useReducer } from 'react';
import Layout from './hoc/Layout/Layout';
import DropZone from './hoc/DropZone/DropZone';
import Loading from './components/Loading/Loading';
import Gallery from './components/Gallery/Gallery';
import Magnify from './components/Magnify/Magnify';
import reducer from './reducer/reducer';
import { Context } from './context/context';
import { ToastContainer } from 'react-toastify';
import { REMOVE_BIG_IMAGE_URL } from './reducer/types';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const [state, dispatch] = useReducer(reducer, {
		bigImageUrl: '',
		images: [],
	});

  return (
		<Context.Provider value={{state, dispatch}}>
			<DropZone>
				<Layout>
					<Loading />
					<Gallery />
				</Layout>
				<Magnify
					onClick={() => dispatch({type: REMOVE_BIG_IMAGE_URL})}
					src={state.bigImageUrl}
				/>
				<ToastContainer />
			</DropZone>
		</Context.Provider>
  );
}

export default App;
