import React from 'react'

export default class Demo2 extends React.Component {
  /**
   * 条件渲染-常用的应用
   * 1.对视图条件进行切换
   * 2.做缺省值
   */

  constructor(){
    super();
    this.state = {
      name :'demo2',
      names :['aa','bb'],
      isLogin:false,
    }
  }
  
  onClickHandle=()=>{
    this.setState({
      names:[]
    })
    console.log(1)
  }

  render(){
    const {names} = this.state
    return(
      <div>
        <span>{this.state.name}</span>
        {
          names.length > 0 ?
          <span>
          {
            this.state.names.map((element,index)=>{
              return <span key={index}>{element}</span>
            })
          }
        </span>
        : <div>错了</div>
        }
         


        <button onClick={this.onClickHandle}>点我</button>
      </div>
    )
  }
}