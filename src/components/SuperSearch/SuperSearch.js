import React, { Component } from 'react';
import './SuperSearch.css';


export default class SuperSearch extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    alert('works');
  }
  render() {
    return (         
        <div>
        <form className="formWrapper" onSubmit={this.onSubmit}>
          <div className="formKeyword">
            <span>Keyword:</span>
            <input type="text" name="keyword"/>
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