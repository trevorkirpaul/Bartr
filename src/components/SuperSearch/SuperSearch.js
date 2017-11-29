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
`;
const InputKeyword = styled.input`
  display: inline-block;
  height: 45px;
  width: 50%;
  margin: 0 auto;
  padding: 5px;
`;
const CheckBoxWrap = styled.div`
  background: #383838;
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin 0 auto;
  padding: 5px 15px;
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
          <InputKeyword id="inpKeyword"type="text" placeholder="enter a search term" onChange={this.onKeywordChange} />
          <CheckBoxWrap>
            <select onChange={this.toggleParam}>
              <option value="title">Title</option>
              <option value="location">Location</option>
              <option value="tag">Tag</option>
            </select>      
          </CheckBoxWrap>
          

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