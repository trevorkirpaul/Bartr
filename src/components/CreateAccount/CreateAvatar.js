import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
  background: #FFF1AD;
  border: 1px solid #D1C68E;
  text-align: center;
  padding: 10px;
`;
const Input = styled.input`
  width: 90%;
`;
const ImgPreview = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: auto;
  border: 1px solid #D1C68E;
  padding: 10px;
  margin: 10px auto;
`;
const Img = styled.img`
  width: 100%;
  height: auto;
`;

export default (props) => (
    <Wrapper>
      <Input
        type="file"
        name="inpAvatar"
        accept=".jpg, .jpeg, .png"
        onChange={props.onChangeAvatar}
      />
      <ImgPreview>
          <Img 
            id="avatarPreview"
            alt="avatar preview"
            
          />
      </ImgPreview>

    </Wrapper>
)