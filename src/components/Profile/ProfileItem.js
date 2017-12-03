import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {startRemoveItem} from '../../actions/items';
import {URLimageItem} from '../../serverLocation';


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
  padding: 15px;
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

const Button = styled.button`
  border: none;
  background: #F1F5F7;
  color: #383838;
  padding: 5px;
`;
const LinkButton = styled(Link)`
  border: none;
  background: #F1F5F7;
  padding: 5px;
  color: #383838;
  text-decoration: none;
`;

export class ProfileItem extends React.Component {
  
  handleRemove = () => {
    this.props.startRemoveItem(this.props._id);
    // console.log(this.props._id);
  }
  
  render(){
    return(
  <Item>
    <ItemDetails>
      <H3>{this.props.title}</H3>
      
      <div>
        <LinkButton to={`/buy/item/${this.props._id}`}>View</LinkButton>
      </div>

      <div>        
        <Button onClick={this.handleRemove}>
          Remove
        </Button>
      </div>

    </ItemDetails>
    <ItemImage>
      <Image src={`${URLimageItem}${this.props.imagePath}`} alt="item preview"/>
    </ItemImage>    
  </Item>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  startRemoveItem: (itemId) => dispatch(startRemoveItem(itemId))
})

export default connect(undefined, mapDispatchToProps)(ProfileItem);