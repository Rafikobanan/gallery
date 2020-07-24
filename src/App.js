import React from 'react';
import Layout from './hoc/Layout/Layout';
import Loading from './components/Loading/Loading';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
		<Layout>
			<Loading />
			<Gallery />
		</Layout>
  );
}

export default App;
