import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { startRecieveAll } from '../../actions/items';
import SuperSearch from '../SuperSearch/SuperSearch';
import BuyList from './BuyList';

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.div`
  max-width: 900px;
  margin: 10px auto;
  padding: 25px;
  font-family: 'Roboto', sans-serif;
  color: #383838;
  background: #D8F7FA;
  border: 1px solid #9EB4B6;
  @media (max-width: 600px) {
    max-width: 100%;
    text-align: center;
    margin: 10px;
    padding: 10px;
  }
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 3em;
  color: #383838;
  margin: 10px 0;
  @media (max-width: 600px) {
    margin: 15px;
  }
`;
const H2 = styled.h2`
  font-weight: 300;
  font-size: 1.5em;
  /* phone */
  @media (max-width: 600px) {
    margin: 5px;
    font-size: 1em;
  }
`;
export class Buy extends React.Component {
  componentDidMount() {
    // fetch all items for sale
    this.props.startRecieveAll();
  }
  render() {
    return (
      <Wrapper>
        <Title>
          <H1>For Sale</H1>
          <H2>Use the SuperSearch to refine your results from our entire databse of items for sale</H2>
        </Title>
        <SuperSearch />    
        <BuyList />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}
const mapDispatchToProps = (dispatch) => ({
  startRecieveAll: () => dispatch(startRecieveAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(Buy);