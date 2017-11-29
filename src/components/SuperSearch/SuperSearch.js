import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {setTextFilter, setTagFilter} from '../../actions/filters';

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
const InputCheckBox = styled.input`
  width: 25px;
  height: 25px;
`;
const CheckBoxLabel = styled.span`
  color: #F1F5F7;
  font-family: ('Roboto'), sans-serif;
`;

export class SuperSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTitle: true,
      searchTag: false
    }
  }

  onKeywordChange = (e) => {
    this.state.searchTitle && this.props.setTextFilter(e.target.value);
    this.state.searchTag && this.props.setTagFilter(e.target.value);
    
  }
  toggleKeyword = (e) => {
    const checked = e.target.checked;
    this.setState(() => ({
      searchTitle: checked
    }));
    

  }
  toggleTag = (e) => {
    const checked = e.target.checked;
    this.setState(() => ({
      searchTag: checked
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
            <InputCheckBox type="checkbox" checked={this.state.searchTitle} onChange={this.toggleKeyword}/>
            <InputCheckBox type="checkbox" onChange={this.toggleTag}/>
            <InputCheckBox type="checkbox" />            
          </CheckBoxWrap>
          <CheckBoxWrap>
            <CheckBoxLabel>Title</CheckBoxLabel>
            <CheckBoxLabel>Tag</CheckBoxLabel>
            <CheckBoxLabel>Location</CheckBoxLabel>
          </CheckBoxWrap>

        </FormWrapper>



       
      
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setTagFilter: text => dispatch(setTagFilter(text))
});

export default connect(undefined, mapDispatchToProps)(SuperSearch);