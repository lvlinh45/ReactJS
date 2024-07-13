import React from "react";
import styled from "styled-components";

const StyledPortfolioList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px 30px;
`;
const PortfolioList = (props) => {
  return <StyledPortfolioList>{props.children}</StyledPortfolioList>;
};

export default PortfolioList;
