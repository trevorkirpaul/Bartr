import React from 'react';
import styled from 'styled-components';
import CreateTags from './CreateTags';


const Wrapper = styled.div`
  
`;
const Form = styled.form`
  
  background: #C7DBBC;
  border: 1px solid #91A089;
  padding: 25px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media(max-width: 500px) {
    max-width: 100%;
    margin: 10px;
    padding: 5px;
  }

`;
const ErrorMessage = styled.h3`
  background: #F9AFB8;
  border: 1px solid #EF233C;
  color: #EF233C;
  padding: 10px 25px;
  margin-bottom: 15px;
  font-size: 1em;
  @media(max-width: 500px) {
    text-align: center;
    margin: 10px;
  }
`;
const Input = styled.input`
  display: inline-block;
  width: 100%;  
  padding: 5px;
  margin-bottom: 10px;
  background: white;
  border: 1px solid #383838;
  border-color: ${props => (props.error === 'inputHighlightError') && '#EF233C' };
  @media(max-width: 500px) {
   width: 90%;
   margin: 0 auto 10px auto;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  overflow: scroll;
  padding: 5px;
  margin-bottom: 15px;
  height: 250px;
  border: 1px solid #383838;
  border-color: ${props => (props.error === 'inputHighlightError') && '#EF233C' };
  @media(max-width: 500px) {
    width: 90%;
    margin: 0 auto 15px auto;
  }
`;

const LowerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  @media(max-width: 500px) {
    flex-direction: column;
    margin-bottom: 55px;
  }
`;
const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ImageUpload = styled.input`
  @media(max-width: 500px) {
    margin-bottom: 15px;
    width: 100%;
    padding: 0;
  }
`;
const ImagePreviewWrapper = styled.div`
  width: 300px;
  height: 300px;
  background: white;
  border: 1px solid #383838;
  @media(max-width: 500px) {
    width: 90%;
    height: 150px;
    margin: 0 auto;
  }
`;
const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Button = styled.button`
  border: none;
  background: #383838;
  color: #F1F5F7;
  padding: 5px 10px;
  cursor: pointer;
  @media(max-width: 500px) {
    margin: 15px;
    padding: 5px;
    width: 90%;
    
  }
`;

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
      window.scrollTo(0,0);
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
      <Wrapper>
        {
          this.state.error && <ErrorMessage id="errorMessage">{this.state.error}</ErrorMessage>
        }
        <Form onSubmit={this.onSubmit}>          
            <Input
              autoFocus
              type="text"
              placeholder="Enter Post Title"
              value={this.state.title}
              onChange={this.onTitleChange}
              error={this.state.errorTitle}
            />          
            <CreateTags handleTags={this.handleTags} handleRemoveTag={this.handleRemoveTag} tags={this.state.tags} />
             <Input
              type="text"
              placeholder="Enter Selling Price"
              value={this.state.price}
              onChange={this.onPriceChange}
              error={this.state.errorPrice}
            />          
            <TextArea
              placeholder="Enter a description of your post/item"
              value={this.state.description}
              onChange={this.onDescriptionChange}
              error={this.state.errorDes}
            >
            </TextArea>
        
          <LowerWrapper>           
            <ActionWrapper>
              <ImageUpload
                type="file"
                id="itemImage"
                name="itemImage"
                accept=".jpg, .jpeg, .png"
                onChange={this.handleImage}
              />
            
              <Button>Create Post!</Button>
            </ActionWrapper>
            
            <ImagePreviewWrapper>
              <ImagePreview id="itemImgPreview" alt="preview"/>
            </ImagePreviewWrapper>
          </LowerWrapper>
                
         
        </Form>
      </Wrapper>
    );
  };
};