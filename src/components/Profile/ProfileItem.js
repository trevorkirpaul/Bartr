import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {startRemoveItem} from '../../actions/items'

const urlIMGpub = 'http://localhost:3001/';

const Item = styled.li`
  
  background: #383838;
  margin: 10px 0;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  height: 150px;
`;
const ItemDetails = styled.div`
  flex: 1 50%;
  padding: 10px;
  font-family: ('Roboto'), sans-serif;
  color: #F1F5F7;
`;
const ItemImage = styled.div`
  flex: 1 50%;
  
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const RemoveButton = styled.button`

`;
export class ProfileItem extends React.Component {
  
  handleRemove = () => {
    this.props.startRemoveItem(this.props._id);
  }
  render(){
    return(
  <Item>
    <ItemDetails>
      <h3>Title: {this.props.title}</h3>
      <p>Price: {this.props.price}</p>
      <p>Description: {this.props.description}</p>
      <RemoveButton onClick={this.handleRemove}>
        Remove...
      </RemoveButton>
    </ItemDetails>
    <ItemImage>
      <Image src={`${urlIMGpub}${this.props.imagePath}`} alt="item preview"/>
    </ItemImage>
    
  </Item>

    )
  }
}


const mapDispatchToProps = dispatch => ({
  startRemoveItem: (itemId) => dispatch(startRemoveItem(itemId))
})

export default connect(undefined, mapDispatchToProps)(ProfileItem);