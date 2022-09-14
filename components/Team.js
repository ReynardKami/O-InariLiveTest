import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "../public/lead.png";
import img2 from "../public/artist.png";
import img3 from "../public/dev.png";
import img4 from "../public/marketing.png";

const Section = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 5rem;
  padding-bottom: 5rem;

  background: linear-gradient(rgba(0, 183, 94, 1), transparent);
  background-color: #000;
`;

const Title = styled.h1`
  width: 45%;
  font-size: xx-large;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  font-family: "audiowide";
  text-transform: capitalize;
  text-shadow: 2px 2px 2px black;

  text-decoration-line: overline;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 1rem;
  padding-top: 3rem;
`;

const MemberContainer = styled.div`
  width: 45vw;

  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
`;

const ImageContainer = styled.div`
  width: 31vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  border-radius: 25px;

  box-shadow: 5px 7px 15px rgba(0, 0, 0, 0.75);

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }

  cursor: pointer;

  img {
    height: auto;
    border-radius: 20px;

    transition: all 0.3s ease;
  }
`;

const Name = styled.h1`
  font-size: larger;
  font-family: "audiowide";
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-shadow: 3px 1px 3px white;

  color: black;
  margin-top: 1rem;
  padding-bottom: 1%;
`;

const Role = styled.h1`
  font-size: small;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  padding-bottom: 0.5rem;
  transition: all 0.3s ease-in-out;
  text-shadow: 1px 1px 1px black;
  color: orangered;

  @media (max-width: 64em) {
    font-size: small;
  }

  @media (max-width: 48em) {
    font-size: small;
  }
`;

const Description = styled.h1`
  font-size: medium;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-transform: capitalize;
  text-shadow: 1px 1px 1px black;
  transition: all 0.3s ease-in-out;

  padding-bottom: 0.5rem;

  @media (max-width: 64em) {
    font-size: medium;
  }

  @media (max-width: 48em) {
    font-size: small;
  }

  @media (max-width: 40em) {
    font-size: small;
  }
`;

const Quote = styled.h1`
  font-size: small;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: gold;
  text-shadow: 1px 1px 1px black;

  padding-bottom: 0.5rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: 64em) {
    font-size: small;
  }

  @media (max-width: 48em) {
    font-size: small;
  }
`;

const MemberComponent = ({
  name = " ",
  position = " ",
  description = " ",
  quote = " ",
}) => {
  return (
    <div>
      <Name>{name}</Name>
      <Role>{position}</Role>
      <Description>{description}</Description>
      <Quote>{quote}</Quote>
    </div>
  );
};

const Team = () => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.75,
        }}
    >
      <Section>
        <Title>Team</Title>
        <Container>
          <MemberContainer>
            <ImageContainer>
              <Image src={img1} alt="/" />
            </ImageContainer>
            <MemberComponent
              name="Reynard"
              position="Founder"
              description="Determined Leader and Father. Rey's Vision is to bring quality to every Ō-Inari Owner."
              quote="One step at a time."
            />
          </MemberContainer>
          <MemberContainer>
            <ImageContainer>
              <Image src={img2} alt="/" />
            </ImageContainer>
            <MemberComponent
              name="Kyy"
              position="Artist"
              description="Sometimes loner, and all the time artist. They have a passion to create much more."
              quote="Life is art, even the chaos."
            />
          </MemberContainer>
        </Container>
        <Container>
          <MemberContainer>
            <ImageContainer>
              <Image src={img3} alt="/" />
            </ImageContainer>
            <MemberComponent
              name="Uncle Red"
              position="Developer"
              description="New to the Metaverse and Blockchain space but always up for a challenge. 'Divine Expansion' is their ultimate goal."
              quote="I'm not here for the games.. unless we're here to play games."
            />
          </MemberContainer>
          <MemberContainer>
            <ImageContainer>
              <Image src={img4} alt="/" />
            </ImageContainer>
            <MemberComponent
              name="Jasmine"
              position="Marketing and Social Media"
              description="New to the Metaverse and Blockchain space but always up for a challenge. 'Divine Expansion' is their ultimate goal."
              quote="I'm not here for the games.. unless we're here to play games."
            />
          </MemberContainer>
        </Container>
      </Section>
    </motion.div>
  );
};

export default Team;
