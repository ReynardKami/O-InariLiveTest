import styled from "styled-components";

const Section = styled.section`
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
  background-color: #0052e0;
  padding-top: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  padding-top: 5%;

  display: flex;
  justify-content: center;
  align-items: center;
  `

const Hero = () => {
  return (
    <Section>Hero</Section>
  )
}

export default Hero