import React from 'react';
import styled from 'styled-components';
import BtnRemoveTag from './BtnRemoveTag';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
`;
const Input = styled.input`
  display: inline-block;
  width: 100%;  
  padding: 5px;
  margin-bottom: 10px;
  background: white;
  border: 1px solid #383838;
  @media(max-width: 500px) {
    width: 90%;
    margin: 0 auto 10px auto;
    
  }
`;

const TagHolder = styled.div`
  width: 100%;
  background: #FFF1AD;
  border: 1px solid #D1C68E;
  color: white;
  padding: 5px;
  margin-bottom: 10px;
  @media(max-width: 500px) {
    width: 90%;
    padding: 5px;
    text-align: center;
    margin: 0 auto 10px auto;
  }
`;
const UlTagList = styled.ul`
  list-style: none;
  display: flex;
  @media(max-width: 500px) {
    display: block;
    
  } 
`;
const LiTagList = styled.li`
  
  background: #D1C68E;
  border: 1px solid #D1C68E;
  border-radius: 25px;
  color: #383838;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 10px;
  margin: 0 5px;
  @media(max-width: 500px) {
    margin: 5px 0;
    justify-content: space-between;
    border-radius: 0;
  }
`; 




export default (props) => {
  
  return (
    <Wrapper>
      
      <Input type="text" id='inpTagsForm' placeholder="Enter Tags" onKeyDown={props.handleTags}/>
      <TagHolder>
        <UlTagList>
          {
            props.tags.length > 0 ? 
            props.tags.map(tag => (
              <LiTagList key={tag}>
                {tag}
                <BtnRemoveTag tagKey={tag} handleRemoveTag={props.handleRemoveTag}/>
              </LiTagList>
              ))
              :
              <LiTagList>no tags yet!</LiTagList>
          }
        </UlTagList>

      </TagHolder>
    </Wrapper>
  )
}