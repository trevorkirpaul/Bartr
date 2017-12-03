import React from 'react';
import styled from 'styled-components';


const ButtonRemoveTag = styled.button`
display: inline-block;
position: relative;
border: 1px solid #FFF1AD;
border-radius: 25px;
background: #FFF1AD;
padding: 0;
margin: 2px;
margin-left: 4px;
width: 20px;
height: 20px;
&:hover {
  cursor: pointer;
}


`;
const Xclose = styled.span`
position: absolute;
top: 1px;
left: 2.5px;
color: #383838;
`;


export default class BtnRemoveTag extends React.Component {
  handleRemoveTag = (e) => {
    e.preventDefault();
    this.props.handleRemoveTag(this.props.tagKey);
  }
  render() {
    return (
      <ButtonRemoveTag onClick={this.handleRemoveTag}>
        <Xclose>{'\u2715'}</Xclose>
      </ButtonRemoveTag>
    )
  }
 
}