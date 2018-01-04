import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <p>{this.props.item}</p>
    )
  }
}

module.exports = ListItem;
