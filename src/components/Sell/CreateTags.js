import React from 'react';
import styled from 'styled-components';
import BtnRemoveTag from './BtnRemoveTag';


const Input = styled.input`
  display: inline-block;
  width: 100%;  
  padding: 5px;
  margin-bottom: 10px;
  background: white;
  border: 1px solid #383838;
  @media(max-width: 500px) {
    width: 90%;
  }
`;

const TagHolder = styled.div`
  width: 100%;
  background: #8D99AE;
  color: white;
  padding: 5px;
  margin-bottom: 10px;
  @media(max-width: 500px) {
    width: 90%;
    padding: 2px;
  }
`;
const UlTagList = styled.ul`
  list-style: none;
  display: flex;
  @media(max-width: 500px) {
    flex-direction: column;
    width: 50%;
    
  } 
`;
const LiTagList = styled.li`
  
  background: #383838;
  border: 1px solid #383838;
  border-radius: 25px;
  color: #F1F5F7;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 10px;
  margin: 0 5px;
`; 




export default (props) => {
  
  return (
    <div>
      
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
    </div>
  )
}