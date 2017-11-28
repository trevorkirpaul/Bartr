import React from 'react';

export default class SellForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: '',
      image: '',
      error: '',
      errorTitle: '',
      errorDes: '',
      errorPrice: ''
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
      this.setState(() => ({
        error: '* Please complete the form!'
      }));
      // functions to apply passed class name to any blank inputs
      const applyTitleBorder = (className) => this.setState(() => ({errorTitle: className}));
      const applyDesBorder = (className) => this.setState(() => ({errorDes: className}));
      const applyPriceBorder = (className) => this.setState(() => ({errorPrice: className}));
  
      !this.state.title ? applyTitleBorder('inputHighlightError') : applyTitleBorder('');
      !this.state.description ? applyDesBorder('inputHighlightError') : applyDesBorder('');
      !this.state.price ? applyPriceBorder('inputHighlightError') : applyPriceBorder('');
      
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        price: this.state.price
      }, this.state.image);
    }
  }
  handleImage = (e) => {    
    const image = e.target.files[0];
    this.setState(() => ({
      image
    }));  
  }

  render() {
    return (
      <div className="sellForm__form">
        <h3 id="errorMessage">{this.state.error}</h3>
        <form onSubmit={this.onSubmit}>

          <div>
            <input
              autoFocus
              type="text"
              placeholder="Enter Post Title"
              value={this.state.title}
              onChange={this.onTitleChange}
              className={this.state.errorTitle}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Selling Price"
              value={this.state.price}
              onChange={this.onPriceChange}
              className={this.state.errorPrice}
            />
          </div>
          <div>
            <textarea
              placeholder="Enter a description of your post/item"
              value={this.state.description}
              onChange={this.onDescriptionChange}
              className={this.state.errorDes}
            >
            </textarea>
          </div>
          <div>
            <input
              type="file"
              id="itemImage"
              name="itemImage"
              accept=".jpg, .jpeg, .png"
              onChange={this.handleImage}
            />
            <button onClick={this.imageLog}>log</button>
          </div>
                
          <div>
            <button>Create Post!</button>
          </div>
        </form>
      </div>
    );
  };
};