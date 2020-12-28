import React from 'react'

export default class Child1 extends React.Component{

  constructor(){
    super();
    this.state = {
      name:'Child1',
      input1:0,
    }
  }

  onChangeHandle=(e)=>{
    this.setState({
      input1:e.target.value
    })
  }

  render(){
    return(
      <div>
        <span>{this.state.name}</span>
        <input type="text" value={this.state.input1} onChange={this.onChangeHandle}/>
      </div>
    )
  }
}
