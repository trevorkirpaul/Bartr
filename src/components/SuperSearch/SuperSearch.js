import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setTextFilter} from '../../actions/filters';

export class SuperSearch extends Component {

  onKeywordChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  onSubmit = (e) => {
    e.preventDefault();
    alert('works');
  }

  componentWillUnmount() {
    this.props.setTextFilter('');
  }
  render() {
    return (         
        <div>
        <form className="formWrapper" onSubmit={this.onSubmit}>
          <div className="formKeyword">
            <span>Keyword:</span>
            <input type="text" name="keyword" onChange={this.onKeywordChange}/>
          </div>
          <div className="formLocation">
            <span>Location:</span>
            <input type="text" name="location"/>
          </div>
          <div className="formButton">
            <button>Go!</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(undefined, mapDispatchToProps)(SuperSearch);