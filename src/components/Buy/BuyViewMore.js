import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemoveItem } from '../../actions/items';
import axios from 'axios';

// var for image path for dev, TODO change for prod
const urlIMGpub = 'http://localhost:3001/';

export class BuyViewMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      imagePath: '',
      createdBy: '',
      price: '',
      description: '',
      _id: ''
    }
  }
 
  onClick = () => {
    const id = this.state._id;
    this.props.startRemoveItem(id);
    this.props.history.push('/buy');
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.post('http://localhost:3001/api/item/'+ id).then(({data}) =>{
      const {title, imagePath, createdBy, price, description, _id} = data;
      this.setState(() => ({
        title,
        imagePath,
        createdBy,
        price,
        description,
        _id
      }));
    }); 
    
  }
  
  render() {
    
    return (
      <div className="viewMoreWrapper">
       
        <div className="titleInfo">
          <div className="innerTitleInfo">
            <h1>{this.state.title}</h1>
            <h3>Sold by: {this.state.createdBy} for ${this.state.price}</h3>
            <button onClick={this.onClick}>Remove</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    startRemoveItem: (itemId) => dispatch(startRemoveItem(itemId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyViewMore);