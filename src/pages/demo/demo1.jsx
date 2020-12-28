import React from 'react'

export default class Demo1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'demo2-组件Props',
      count:0,
      showState:false,
    }
  }

  addCount(){

    let sCount = this.state.count
    let showState = this.state.showState

    this.setState({
      count:sCount+=1,
      showState:!showState
    })
  }

  // is assigned a value but never used no-unused-vars
  // 错误原因：eslint的验证语法

  // 解决办法：在错误语句后添加注释
  // eslint-disable-line no-unused-vars

  render() {

    let showTxt = this.state.showState ? '这是true' : '这是false'// eslint-disable-line no-unused-vars

    return (
      <div>
        <span>count:{this.state.count}-{showTxt}-</span>
        <span>{this.state.name}</span>
        <button onClick={this.addCount.bind(this)}>点我</button>
        {/* {
          this.props.nav1.map((element,index)=>{
            return <h1 key={index}>{element}</h1>
          })
        }

        {
          this.props.nav2.map((element,index)=>{
            return <h1 key={index}>{element}</h1>
          })
        } */}
      </div>
    )
  }
}