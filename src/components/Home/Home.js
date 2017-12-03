import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
  margin: 10px auto;
  max-width: 900px;
  @media(max-width: 500px) {
    width: 90%;
  }
  
`;
const HeroPanel = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #D8F7FA;
  border: 1px solid #9EB4B6;
  padding: 25px;
  @media(max-width: 500px) {
    flex-direction: column;
  }
`;
const TitleWrapper = styled.div``;
const HeroText = styled.h1`
  margin: 10px;
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-size: 3em;
  @media(max-width: 500px) {
    font-size: 2em;
    margin-bottom: 35px;
  }
  
`;
const ActionWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
 
`;
const Button = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  color: white;
  background: #383838;
  padding: 10px;
  margin-bottom: 10px;
`;

const InfoPanel = styled.div`
  background: #F9AFB8;
  border: 1px solid #EF233C;
  margin: 15px 0;
  padding: 25px;
`;
const InfoTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-weight: 700;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #EF233C;
`;
const InfoMessage = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  line-height: 30px;
  margin-bottom: 10px;
`;
const HyperLink = styled.a`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  color: white;
  background: #383838;
  padding: 10px;

`;
export default () => (
  <Wrapper>
    
    <HeroPanel>
      <TitleWrapper>
        <HeroText>Welcome to bartr, <br/> buy everything.</HeroText>
      </TitleWrapper>
      <ActionWrapper>
        
          <Button to="/createAccount">
            Create Account
          </Button>
          <Button to="/login">
            Login
          </Button>
       
        
      </ActionWrapper>

    </HeroPanel>
    <InfoPanel>
      <InfoTitle>This is a portfolio piece</InfoTitle>
      <InfoMessage>
        My name is Trevor Kirpaul and I created this site using React + Redux, Express/Node and MongoDB.
      </InfoMessage>
      <InfoMessage>
        Whiles this site is fully functional, it is not intended for any use beyond showcasing my skills as a portfolio piece.
      </InfoMessage>
      <HyperLink
        href="https://github.com/trevorkirpaul"
        target="_blank"
      > My GitHub</HyperLink>
    </InfoPanel>
  </Wrapper>
);