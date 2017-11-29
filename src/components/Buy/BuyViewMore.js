import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// var for image path for dev, TODO change for prod
const urlIMGpub = 'http://localhost:3001/';

// styles
const TagsList = styled.ul`
  list-style: none;
  margin: 0 0 15px 0;
`;
const TagsListItem = styled.li`
  background: #F1F5F7;
  border: 1px solid #F1F5F7;
  border-radius: 15px;
  display: inline-block;
  margin: 0 2px;
  padding: 4px 4px;

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
      _id: '',
      tags: []
    }
  }
 

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.post('http://localhost:3001/api/item/'+ id).then(({data}) =>{
      const {title, imagePath, createdBy, price, description, _id, tags} = data;
      this.setState(() => ({
        title,
        imagePath,
        createdBy,
        price,
        description,
        _id,
        tags
      }));
    }); 
    
  }
  
  render() {
    
    return (
      <div className="viewMoreWrapper">
       
        <div className="titleInfo">
          <div className="innerTitleInfo">
            <h1>{this.state.title}</h1>
            <TagsList>
              {
                this.state.tags.map((tag) => (
                  <TagsListItem key={tag}>{tag}</TagsListItem>
                ))
              }
            </TagsList>
            <h3>Sold by: {this.state.createdBy} for ${this.state.price}</h3>
            
          </div>
                  
        </div>

        <div className="itemDescriptionContainer">
          <div className="imageDiv">
            {this.state.imagePath && <img src={`${urlIMGpub}${this.state.imagePath}`} alt="empty"/>}
          </div>
          <div className="descriptionDiv">
            <p>Description: {this.state.description}</p>
          </div>
        </div>
        <Link to={'/buy'}> <span>back...</span> </Link> 
        
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  item: state.items.find((item) => item._id === props.match.params.id)
});



export default connect(mapStateToProps)(BuyViewMore);