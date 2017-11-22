import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class BuyViewMore extends React.Component {
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
        
        <Link to={'/buy'}> <span>back...</span> </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  item: state.items.find((item) => item._id === props.match.params.id)
});

export default connect(mapStateToProps)(BuyViewMore);