import React from 'react'

export default class Demo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'demo2-组件Props',
      count: 0,
      showState: false,
    }
  }

  async addCount() {
    let sCount = this.state.count
    let showState = this.state.showState
    this.setState({
      count: sCount += 1,
      showState: !showState
    }, () => {
      console.log(sCount)
    })
    // console.log(sCount)

    // await this.setStateAsync({ count: this.state.count + 1 })
    // console.log(this.state.count)
  }


  // 异步promise 同步数据
  // setStateAsync(state) {
  //   return new Promise((resolve) => {
  //     this.setState(state, resolve);
  //   })
  // }



  render() {

    // is assigned a value but never used no-unused-vars
    // 错误原因：eslint的验证语法
    // 解决办法：在错误语句后添加注释
    // eslint-disable-line no-unused-vars
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