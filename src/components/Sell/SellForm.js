import React from 'react';
import CreateTags from './CreateTags';
// img preview has styles attached, must be changed when project is converted to styled components
export default class SellForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: '',
      image: '',
      tags: [],
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
        price: this.state.price,
        tags: this.state.tags
      }, this.state.image);
    }
  }
  handleImage = (e) => {    
    const image = e.target.files[0];
    const preview = document.getElementById('itemImgPreview') ;    
    // set up file reader for image preview
    const reader = new FileReader();
    reader.onload = e => preview.src = e.target.result;
    reader.readAsDataURL(image);

    this.setState(() => ({
      image
    }));  
  }
  handleTags = (e) => {
    //on space bar key press, add value to state.tags which gets mapped
    if (e.which === 32) {
      // remove normal spacebar function
      e.preventDefault();
      const newTag = e.target.value
      if (this.state.tags.includes(newTag) === false) {
        this.setState(() => ({
          tags: [...this.state.tags, newTag],
          error: ''
        }));
        e.target.value = '';
      } else {
        this.setState(() => ({
          error: 'duplicate tag!'
        }))
      }
    } 
  }
  handleRemoveTag = key => {
    this.setState(() => ({
      tags: this.state.tags.filter((tag) => tag !== key)
    }))
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
          <CreateTags handleTags={this.handleTags} handleRemoveTag={this.handleRemoveTag} tags={this.state.tags} />
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
          <div className="itemImgWrapper">
            <input
              type="file"
              id="itemImage"
              name="itemImage"
              accept=".jpg, .jpeg, .png"
              onChange={this.handleImage}
            />
            <div
              style={{
                width: '300px',
                height: '300px',
                background: 'white',
                border: '1px solid black'
              }}
            >
              <img id="itemImgPreview" alt="preview" style={{width: '100%', height: 'auto'}}/>
            </div>
          </div>
                
          <div>
            <button>Create Post!</button>
          </div>
        </form>
      </div>
    );
  };
};