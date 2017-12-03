import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import {URLimageItem, APIitem} from '../../serverLocation';
// var for image path for dev, TODO change for prod


// styles

const ViewMoreWrapper = styled.div`
  max-width: 900px;
  margin: 15px auto;
  @media(max-width: 500px) {
    
    width: 90%;
    margin: 10px auto 50px auto;
  }
  
`;

const TitleDetails = styled.div`
  
  font-family: 'Roboto', sans-serif;
  color: #383838;
  background: #D8F7FA;
  border: 1px solid #9EB4B6;
  padding: 15px;
  margin-bottom: 25px;
  
  
  @media(max-width: 500px) {
    text-align: center;
    margin-bottom: 10px;
  }
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 3em;
  margin: 0 0 15px 0;
  
  @media(max-width: 500px) {
    font-size: 2.5em;
  }
`;
const Location = styled.span`
  display: inline-block;
  margin: 0 0 15px 0;
`;
const TitleSeller = styled.h3`
  font-size: 1.5em;
  font-weight: 400;
  margin: 0 0 20px 0;
  
`;
const TagsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
  @media(max-width: 500px) {
    margin: 0;
    &:before {
      content: 'Tags: ';
    }
  }
  
`;
const TagsListItem = styled.li`
  background: #383838;
  color: white;
  border: 1px solid #F1F5F7;
  border-radius: 15px;
  display: inline-block;
  margin: 0 2px;
  padding: 5px 7px;
  @media(max-width: 500px) {
    background: none;
    color: #383838;
    padding: 0;
    &:after {
      content: ',';
    }
  }
`;

const ItemDetails = styled.div`
  
`;
const ImagePanel = styled.div`
  background: #C7E5CD;
  border: 1px solid #B5D1BB;
  padding: 15px;
  margin-bottom: 25px;
  @media(max-width: 500px) {
    margin-bottom: 10px;
    text-align: center;
  }
`;
const ItemImage = styled.img`
  width: 550px;
  height: auto;
  @media(max-width: 500px) {
    width: 250px;
  }
  
`;
const DetailsEnd = styled.div`
  padding: 15px;
  color:#383838;
  background: #FFF1AD;
  border: 1px solid #D1C68E;
  @media(max-width: 500px) {
    text-align: center;
  }
`;
const DetailsWrapper = styled.div`
  width: 50%;
  @media(max-width: 500px) {
    width: 100%;
    text-align: left;
  }
`;
const DetailsTitle = styled.h3``;
const Details = styled.p`
  margin: 0 0 15px 0;
  color: #383838;
  font-family: 'Roboto', sans-serif;
  line-height: 30px;
  `;
const Button = styled.button`
  border: none;
  background: #383838;
  color: #F1F5F7;
  padding: 10px 15px;
  font-family: ('Roboto'), sans-serif;
  &:hover {
    cursor: pointer;
  }
  
`;


export class BuyViewMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      imagePath: '',
      createdBy: '',
      price: '',
      description: '',
      location: '',
      _id: '',
      tags: []
    }
  }
 
  handleGoBack = () => {
    this.props.history.push('/buy');
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.post(`${APIitem}` + id).then(({data}) =>{
      const {title, imagePath, createdBy, price, description, _id, tags, location} = data;
      this.setState(() => ({
        title,
        imagePath,
        createdBy,
        price,
        description,
        location,
        _id,
        tags
      }));
    }); 
    
  }
  
  render() {
    
    return (
      <ViewMoreWrapper>       
        <div className="titleInfo">
          <TitleDetails>
            
              <Title>{this.state.title}</Title>
              <Location>Loaction: {this.state.location}</Location>
              <TitleSeller>Sold by: {this.state.createdBy} for ${this.state.price}</TitleSeller>            
              <TagsList>
                {
                  this.state.tags.map((tag) => (
                    <TagsListItem key={tag}>{tag}</TagsListItem>
                  ))
                }
              </TagsList>
            
            
          </TitleDetails>                  
        </div>
        <ItemDetails>         
          <ImagePanel>
            <ItemImage src={this.state.imagePath && `${URLimageItem}${this.state.imagePath}`} alt="empty"/>         
          </ImagePanel>
          <DetailsEnd>
            <DetailsWrapper>
              <DetailsTitle>Description:</DetailsTitle>
              <Details>
              {this.state.description}</Details>
              <Button onClick={this.handleGoBack}>back</Button>
            </DetailsWrapper>
          </DetailsEnd>
            
        </ItemDetails>      
      </ViewMoreWrapper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  item: state.items.find((item) => item._id === props.match.params.id)
});



export default connect(mapStateToProps)(BuyViewMore);