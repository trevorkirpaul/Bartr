import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { recieveAll } from '../../actions/items';
import SuperSearch from '../SuperSearch/SuperSearch';
import BuyList from './BuyList';



export class Buy extends React.Component {
  componentDidMount() {
    const urlAPI = 'http://localhost:3001/api/items';
    axios.get(urlAPI)
      .then(res => {
        this.props.recieveAll(res.data);
      })
  }
  render() {
    return (
      <div>
        <div className="BuyPageTitle">
          <h1>For Sale</h1>
          <h2>Use the SuperSearch to refine your results from our entire databse of items for sale</h2>
        </div>
        <SuperSearch />    
        <BuyList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}
const mapDispatchToProps = (dispatch) => ({
  recieveAll: (data) => dispatch(recieveAll(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Buy);