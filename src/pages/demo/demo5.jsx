import React from 'react'
import PropTypes from 'prop-types'

export default class Demo5 extends React.Component{

  constructor(){
    super();
    this.state = {
      name:'Demo5',
    }
  }

  render(){
    return(
      <div>
        <span>{this.state.name}-{this.props.titles}</span>
      </div>
    )
  }
}

Demo5.propTypes = {
  titles: PropTypes.string.isRequired
};