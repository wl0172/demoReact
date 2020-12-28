// import { render } from '@testing-library/react'
import React from 'react';
import { Button } from 'antd';

export default class Demo extends React.Component {

	constructor(porps) {
		super(porps);
		this.state = {
			name: 'demo1-渲染元素',
			date: new Date().toLocaleTimeString()
		}
	}

	// 1-组件已经被渲染到dom中后运行
	componentDidMount() {
		// console.log('在第一次渲染后调用，只在客户端')
		// console.log(this)
		this.timerID = setInterval(() => {
			this.tick()
		}, 1000)
	}
	// 销毁前的回调
	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	tick() {
		this.setState({
			date: new Date().toLocaleTimeString()
		});
	}



	render() {
		return (
			<div>
				{this.props.children}
				<div>{this.state.name} It is {this.state.date}</div>

				<Button type="primary">Primary Button</Button>
				<Button>Default Button</Button>
				<Button type="dashed">Dashed Button</Button>
				<br />
				<Button type="text">Text Button</Button>
				<Button type="link">Link Button</Button>
			</div>
		)
	}
}