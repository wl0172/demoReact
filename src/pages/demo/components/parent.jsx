import React from 'react'

import Child1 from './child1'
import Child2 from './child2'

export default class Parent extends React.Component{

  constructor(){
    super();
    this.state = {
      name:'',
      money:1,
      input:0,
    }
  }


  render(){
    return(
      <div>
        <Child1 money={this.state.money}/>
        <Child2 money={this.state.money}/>
      </div>
    ) 
  }
}
