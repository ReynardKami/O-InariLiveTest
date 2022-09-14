import styled from "styled-components";
import Image from "next/image";
import img1 from "../public/216.png";

const Container = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;


  @media (max-width: 70em) {
    width: 80%;
    height: 80%;
  }

  @media (max-width: 64em) {
    width: 50%;
    height: 80%;
  }

  @media (max-width: 48em) {
    width: 63%;
    height: 80%;
  }

  @media (max-width: 40em) {
    width: 70%;
    height: 80%;
  }

  @media (max-width: 30em) {
    width: 60vw;
    height: 37vh;
  }

  img {
    border-radius: 10%;
  }
`;

const AboutImage = () => {
  return (
    <Container>
      <Image src={img1} alt="Nfts" />
    </Container>
  );
};

export default AboutImage;
