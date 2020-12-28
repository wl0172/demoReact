import React from 'react'

export default class Demo3 extends React.Component{

  constructor(){
    super();
    this.state = {
      name:'demo3',
      arr:[{
        name:1,
        age:2,
        sex:0
      },{
        name:1,
        age:2,
        sex:0
      },{
        name:1,
        age:2,
        sex:0
      },{
        name:1,
        age:2,
        sex:0
      }]
    }
  }

  onClickHandle=()=>{
    this.setState({
      arr:this.state.arr.concat({
        name:1,
        age:2,
        sex:0
      })
    })
  }

  render(){
    return(
      <div>
        <span>{this.state.name}</span>
        <ul>
          {
            this.state.arr.map((element,index)=>{
              return <li key={index}>{element.name}</li>
            })
          }
        </ul>

        <button onClick={this.onClickHandle}>点我</button>
      </div>
    )
  }
}
