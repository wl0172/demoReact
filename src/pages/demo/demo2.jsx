import React from 'react'

export default class Demo2 extends React.Component{

  componentWillMount(){
    console.log(1)
  }
  componentDidMount(){
    console.log(2)
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return false
  }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }





  render(){
    return (
      <div>2</div>
    )
  }
}