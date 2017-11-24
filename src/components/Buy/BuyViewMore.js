import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteItem } from '../../actions/items';

export class BuyViewMore extends React.Component {
  onClick = () => {
    const id = this.props.item._id;
    
    this.props.deleteItem(id);
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="viewMoreWrapper">
        {
          this.props.item && 
            <div className="itemInfo">
              <h1>{this.props.item.title}</h1>
              <h3>{this.props.item.description}</h3>
            </div>          
        }
        <button onClick={this.onClick}>Remove</button>
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
    deleteItem: (itemId) => deleteItem(itemId)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyViewMore);