### react 生命周期
函数列表
  componentWillmount:在组件渲染之前执行
  componentDidMount:在组件渲染之后执行
  shouldComponentUpdata:返回true和false，true代表允许改变，false代表不允许
  componentWillUpdata:数据在改变之前执行(state,props)
  componentDidUpdate:数据修改完成(state,props)
  componentWillReveiceProps:props发生改变执行
  componentWillUnmount:组件卸载前执行

### setState更新是同步还是异步
  1.setState会引起视图的重绘
  2.在可控的情况下是异步，在非可控的情况下是同步

  11
