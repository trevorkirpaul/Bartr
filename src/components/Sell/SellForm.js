import React from 'react';

export default class SellForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: ''
    };
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({
      title
    }));
  }
  onPriceChange = (e) => {
    const price = e.target.value;
    this.setState(() => ({
      price
    }));
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() =>({
      description
    }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.title || !this.state.price) {
      alert('please fill out all of the fields!');
    } else {
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        price: this.state.price
      });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>

          <input
            autoFocus
            type="text"
            placeholder="Enter Post Title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <input
            type="text"
            placeholder="Enter Selling Price"
            value={this.state.price}
            onChange={this.onPriceChange}
          />
     
          <textarea
            placeholder="Enter a description of your post/item"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          >
          </textarea>
          <button>Create Post!</button>
        </form>
      </div>
    );
  };
};