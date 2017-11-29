import React from 'react';
import styled from 'styled-components';


const ButtonRemoveTag = styled.button`
display: inline-block;
position: relative;
border: 1px solid coral;
border-radius: 15px;
background: coral;
padding: 0;
margin: 2px;
margin-left: 4px;
width: 5px;
height: 5px;

`;
const Xclose = styled.span`
position: absolute;
top: 2px;
left: 3.5px;  
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