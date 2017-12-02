import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {setTextFilter, setTagFilter, setLocationFilter} from '../../actions/filters';

// styles

const FormWrapper = styled.div`
  margin: 15px auto;
  max-width: 900px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    max-width: 100%;
    text-align: center;
    padding: 0px;
  }
`;
const InputKeyword = styled.input`
  display: inline-block;
  background: #383838;
  /* border-top: 1px solid #383838; */
  border: none;
  color: palevioletred;
  outline: none;
  height: 30px;
  width: 100%;
  margin: 0 auto;
  padding: 5px;  
`;
const SelectWrap = styled.div`  
  background: #383838;
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
  padding: 0;
  @media (max-width: 600px) {
    width: 90%;    
  }
`;
const Select = styled.select`
  outline: none;
  width: 100%;
  margin: 0 auto;
  border: none; 
  padding: 10px;
  background: #383838;
  color: #F1F5F7;
  &:hover {
    cursor: pointer;
  }
 
`;


export class SuperSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      param: 'title'      
    }
  }

  onKeywordChange = (e) => {
    this.state.param === 'title' && this.props.setTextFilter(e.target.value);
    this.state.param === 'tag' && this.props.setTagFilter(e.target.value);
    this.state.param === 'location' && this.props.setLocationFilter(e.target.value);    
  }
  toggleParam = (e) => {
    const selected = e.target.value;
    this.setState(() => ({
      param: selected
    }))
    document.getElementById('inpKeyword').focus();
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
        

        <FormWrapper>

          <SelectWrap>
            <InputKeyword id="inpKeyword"type="text" placeholder="enter a search term" onChange={this.onKeywordChange} />
          </SelectWrap>
                    
            <SelectWrap>
              <Select onChange={this.toggleParam}>
                <option value="title">Title</option>
                <option value="location">Location</option>
                <option value="tag">Tag</option>
              </Select>   
            </SelectWrap>   
          
          

        </FormWrapper>



       
      
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setTagFilter: text => dispatch(setTagFilter(text)),
  setLocationFilter: text => dispatch(setLocationFilter(text))
});

export default connect(undefined, mapDispatchToProps)(SuperSearch);