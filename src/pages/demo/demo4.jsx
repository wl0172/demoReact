import React from 'react'

export default class Demo4 extends React.Component{

  constructor(){
    super();
    this.refDiv = React.createRef();
    this.state = {
      name:'Demo4',
      value:'',
    }
  }

  // 生命周期
  componentDidMount(){
    console.log(this.refDiv.current)
  }

  onSubmitHandle=(e)=>{
    // 阻止form表单默认提交
    e.preventDefault()
    console.log(this.state.value)
  }

  onChangeHandle=(e)=>{
    this.setState({
      value:e.target.value
    })
  }

  render(){
    return(
      <div>
        <span>{this.state.name}</span>

        <div ref={this.refDiv}>
          <div>1</div>
          <div>1</div>
        </div>

        <form onSubmit={this.onSubmitHandle}>
          <label>
            名字: <span></span>
            <input type="text" value={this.state.value} onChange={this.onChangeHandle}/>
          </label>
          <input type="submit" value="提交"></input>
        </form>

      </div>
    )
  }
}
