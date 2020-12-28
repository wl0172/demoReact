import React from 'react'

export default class Child2 extends React.Component{

  constructor(){
    super();
    this.state = {
      name:'Child2',
      input2:0
    }
  }

  onChangeHandle=(e)=>{
    this.setState({
      input2:e.target.value
    })
  }

  render(){
    return(
      <div>
        <span>{this.state.name}</span>
        <input type="text" value={this.state.input2} onChange={this.onChangeHandle}/>
      </div>
    )
  }
}
