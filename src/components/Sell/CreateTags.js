import React from 'react';
import styled from 'styled-components';
import BtnRemoveTag from './BtnRemoveTag';
const TagHolder = styled.div`
width: 100%;
background: #383838;
color: white;
padding: 5px;
`;

const UlTagList = styled.ul`
  list-style: none;
  display: flex;  
`;

const LiTagList = styled.li`
  align-items: center;
  background: #F1F5F7;
  border: 1px solid #F1F5F7;
  border-radius: 15px;
  color: #383838;
  display: flex;
  padding: 2px 5px 2px 8px;
  margin: 0 5px;

`; 




export default (props) => {
  
  return (
    <div>
      
      <input type="text" id='inpTagsForm' placeholder="Enter Tags" onKeyDown={props.handleTags}/>
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