import React from 'react'

export default class Demo6 extends React.Component{

  constructor(){
    super();
    this.state = {
      name:'Demo6',
    }
  }

  render(){
    return(
      <div>
        <span>{this.state.name}</span>
      </div>
    )
  }
}
