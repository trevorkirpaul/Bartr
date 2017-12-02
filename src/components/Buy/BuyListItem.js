import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const urlIMGpub = 'http://localhost:3001/';

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 150px;
  margin: 10px auto;
  background: #383838;
  @media (max-width: 500px) {
    flex-direction: column;
    height: 250px;
  }
`;
const ImgWrapper = styled.div`
  flex: 1;
  @media(max-width: 500px) {
    height: 50%;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Details = styled.div`
  flex: 2;
  padding: 25px 15px;
  @media(max-width: 500px) {
   padding: 5px 10px; 
  }
  
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  @media(max-width: 500px) {
    padding: 0;
  }
`;
const Title = styled.h2`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #F1F5F7;
  @media(max-width: 500px) {
  font-size: 1em; 
  }
`;
const Price = styled.h2`
  margin: 0;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: #F1F5F7;
  @media(max-width: 500px) {
   font-size: 1em; 
  }
`;
const LowerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    
  }
 
`;
const Seller = styled.p`
  color: #F1F5F7;
  font-family: 'Roboto', sans-serif;
  @media(max-width: 500px) {
    
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  background: #F1F5F7;
  color: #383838;
  padding: 5px;
  height: 40px;
  width: 90px;
  @media (max-width: 500px) {
    align-self: flex-end;
  }
`;


export default ({ location, title, description, price, _id, createdBy, imagePath ='empty' }) => (
  <Wrapper>
      <ImgWrapper>
        <Img src={`${urlIMGpub}${imagePath}`}/>
      </ImgWrapper>
      <Details>
        <TitleWrapper>
          <Title>
            {title}
          </Title>
          <Price>
            ${price}
          </Price>
        </TitleWrapper>
        <LowerWrapper>
          <Seller>Sold by: {createdBy} from {location}</Seller>
          <div>
            <StyledLink to={`/buy/item/${_id}`}>View more</StyledLink>
          </div>
        </LowerWrapper>
      </Details>
      
    
  </Wrapper>
);