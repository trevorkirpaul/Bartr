import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

// var for image path for dev, TODO change for prod
const urlIMGpub = 'http://localhost:3001/';

// styles

const ViewMoreWrapper = styled.div`
  max-width: 900px;
  margin: 15px auto;

  
`;

const TitleDetails = styled.div`
  
  font-family: 'Roboto', sans-serif;
  color: #383838;
  
  
  @media(max-width: 500px) {
   flex-direction: column; 
  }
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 3em;
  margin: 0;
  @media(max-width: 500px) {
    font-size: 1.5em;
  }
`;
const Location = styled.span``;
const TitleSeller = styled.h3`
  font-size: 1.5em;
  font-weight: 400;
  margin: 15px auto;
  
`;
const TagsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
  
`;
const TagsListItem = styled.li`
  background: #383838;
  color: white;
  border: 1px solid #F1F5F7;
  border-radius: 15px;
  display: inline-block;
  margin: 0 2px;
  padding: 5px 7px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemImage = styled.img`
  width: 550px;
  height: auto;
  
`;
const DetailsEnd = styled.div`
  padding: 15px;
  
  color:#383838;
  font-family: ('Roboto'), sans-serif;
  font-size: 1.5em;
  font-weight: 400;
`;

const Details = styled.p`
  margin: 0 0 15px 0;
  `;
const Button = styled.button`
  border: none;
  background: #F1F5F7;
  padding: 2px 5px;
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
    axios.post('http://localhost:3001/api/item/'+ id).then(({data}) =>{
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
              <Location>({this.state.location})</Location>
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
          <ItemImage src={this.state.imagePath && `${urlIMGpub}${this.state.imagePath}`} alt="empty"/>         
          <DetailsEnd>
            <Details>
             {this.state.description}</Details>
            <Button onClick={this.handleGoBack}>back</Button>
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