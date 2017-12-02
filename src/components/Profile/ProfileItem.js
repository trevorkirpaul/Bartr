import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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
  padding: 5px;
  font-family: ('Roboto'), sans-serif;
  color: #F1F5F7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const H3 = styled.h3`
  margin: 0;
`;
// const P = styled.p`
//   margin: 0;
// `;
const ItemImage = styled.div`
  flex: 1 50%;  
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const ViewButton = styled(Link)`
  text-decoration: none;
  color: #383838;
  background: #F1F5F7;
  padding: 2px 5px;
`;
const RemoveButton = styled.button`
  border: none;
  background: #F1F5F7;
  padding: 5px;
`;
export class ProfileItem extends React.Component {
  
  handleRemove = () => {
    this.props.startRemoveItem(this.props._id);
  }
  render(){
    return(
  <Item>
    <ItemDetails>
      <H3>Title: {this.props.title}</H3>
      
      <div>
        <ViewButton to={`/buy/item/${this.props._id}`} >View</ViewButton>
      </div>

      <div>        
        <RemoveButton onClick={this.handleRemove}>
          Remove...
        </RemoveButton>
      </div>

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