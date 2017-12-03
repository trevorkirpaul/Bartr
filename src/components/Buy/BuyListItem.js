import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {URLimageItem} from '../../serverLocation';
// const urlIMGpub = 'http://localhost:3001/';

const Wrapper = styled.div`
  margin: 10px;
  background: #C7DBBC;
  border: 1px solid #91A089;
  padding: 10px;
`;
const ImgWrapper = styled.div`
  margin-bottom: 10px;
`;
const Img = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  border: 1px solid #91A089;
`;
const TitleWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media(min-width: 600px) {
    font-size: 2em;
    margin: 25px 0;
  }
 
`;
const Title = styled.span``;
const Price = styled.span`
    @media(min-width: 600px) {
    font-weight:700;
  }
`;
const SellerWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #383838;
 
  margin-bottom: 15px;

`;
const Seller = styled.span``;
const ActionWrapper = styled.div`
  text-align: center;
  @media(min-width: 800px) {
    text-align: left;
  }
`;
const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #F1F5F7;
  background: #383838;
  padding: 5px 10px;
  margin: 0 0 0px 0;
`;


export default ({ location, title, description, price, _id, createdBy, imagePath ='empty' }) => (
  <Wrapper>
      <ImgWrapper>
        <Img src={`${URLimageItem}${imagePath}`}/>
      </ImgWrapper>
     
      <TitleWrapper>
        <Title>
          {title}
        </Title>
        <Price>
          ${ price}
        </Price>
      </TitleWrapper>
      
      <SellerWrapper>
        <Seller>Sold by: {createdBy} from {location}</Seller>
      </SellerWrapper>

      <ActionWrapper>
        <StyledLink to={`/buy/item/${_id}`}>View more</StyledLink>
      </ActionWrapper>
    
  </Wrapper>
);