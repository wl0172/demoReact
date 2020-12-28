// import logo from '@/logo.svg';
// import './App.css';

import Demo from '../demo/demo'
import Demo1 from '../demo/demo1'
import Demo2 from '../demo/demo2'
import Demo3 from '../demo/demo3'
import Demo4 from '../demo/demo4'
import Demo5 from '../demo/demo5'

import Parent from '../demo/components/parent'


// import Demolife from '../demo/Demolife'

import 'antd/dist/antd.css';

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
			{/* <br/>
			<Demo1 title="2" nav1={nav1} nav2={nav2}/>
			<br/>
			<Demo2 />
			<br/>
			<Demo3 /> */}
			{/* <br/>
			<Demo4 /> */}
			<br/>
			<Demo5 titles="标题"/>

			{/* <Parent /> */}



			{/* <Demolife /> */}
		</div>
	);
}

export default App;
