// import logo from '@/logo.svg';
// import './App.css';

import Demo from '../demo/demo'
import Demo1 from '../demo/demo1'
import Demo2 from '../demo/demo2'

function App() {

	let nav1 = ['hell','word']
	let nav2 = ['hell-1','word-2']

	return (
		<div className="App">
			{/* <header className="App-header"> */}
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			{/* </header> */}
			<Demo title="1">
				<div>我是啥</div>
			</Demo>
			<Demo1 title="2" nav1={nav1} nav2={nav2}/>
			<Demo2 />
		</div>
	);
}

export default App;
