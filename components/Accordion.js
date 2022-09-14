import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.4rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  border-radius: 10px;
  transition: all 0.7s ease-in-out;


  background: linear-gradient(rgba(255, 255, 255, 0.7), transparent);

  @media (max-width: 48em) {
    margin: 2rem 0;
  }
`;

const Title = styled.div`
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  transition: all 0.2s ease-in-out;

  text-shadow: 2px 2px 1px black;

  @media (max-width: 64em) {
    margin: 0.5rem 0;
    font-size: 1.1em;
  }
`;

const Reveal = styled.div`
  display: ${(props) => (props.clicked ? "block" : "none")};
  margin-top: 1rem;
  font-size: medium;
  font-weight: 300;
  line-height: 1.5rem;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Indicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Accordion = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)}>
        <Name>
          <span>{title}</span>
        </Name>
        {collapse ? <Indicator>-</Indicator> : <Indicator>+</Indicator>}
      </Title>
      <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;
