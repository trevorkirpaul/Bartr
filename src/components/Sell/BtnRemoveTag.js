import React from 'react';
import styled from 'styled-components';


const ButtonRemoveTag = styled.button`
display: inline-block;
position: relative;
border: 1px solid #F1F5F7;
border-radius: 25px;
background: #F1F5F7;
padding: 0;
margin: 2px;
margin-left: 4px;
width: 20px;
height: 20px;

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