import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 9rem;

  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
  background-color: #00b75e;
`;

const Title = styled.h1`
  font-size: xx-large;
  font-family: "audiowide";
  text-transform: capitalize;
  color: #ffffff;
  text-shadow: 3px 3px 3px #000000;
  text-decoration-line: overline;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: fit-content;

  @media (max-width: 40em) {
    font-size: larger;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 100%;
  }

  @media (max-width: 48em) {
    width: 100%;
  }
`;


const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }

  @media (max-width: 48em) {
    justify-content: flex-start;
  }

  div {
    border-radius: 50px 0 50px 0;
    text-align: right;

    @media (max-width: 48em) {
      border-radius: 0 50px 0 50px;
      text-align: left;
      p {
        border-radius: 0 40px 0 40px;
      }
    }
  }

  p {
    border-radius: 40px 0 40px 0;
  }

  & > *:nth-of-type(2n) {
    justify-content: end;

    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 97.8%;
  height: 100%;
  display: flex;
  padding: 1rem;
`;

const ItemContainer = styled.div`
  width: 50%;
  height: fit-content;
  padding: 0.5rem;
  border: 3px solid black;
  background: linear-gradient(rgba(255, 107, 24, 1), transparent);
  background-color: #993300;
  box-shadow: 7px 9px 5px rgba(0, 0, 0, 0.75);


  @media (max-width: 48em) {
    width: 90%;
  }
`;
const Box = styled.p`
  height: fit-content;
  background: linear-gradient(rgba(255, 255, 255, 1), transparent);
  background-color: #222;
  padding: 1rem;
  position: relative;
  border: 3px solid black;
`;

const SubTitle = styled.span`
  display: block;
  font-size: larger;
  text-transform: capitalize;
  text-shadow: 1px 1px 3px #fff;
  color: black;

  @media (max-width: 40em) {
    font-size: large;
    font-weight: 600;
  }
`;
const Text = styled.span`
  display: block;
  font-size: medium;
  text-transform: capitalize;
  text-shadow: 1px 1px 1px #000;
  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 40em) {
    font-size: small;
    font-weight: 600;
  }
`;

const EverlastingRulerText = styled.span`
  display: block;
  font-size: larger;
  text-transform: capitalize;
  text-shadow: 1px 1px 1px #000;
  color: red;
  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 40em) {
    font-size: medium;
    font-weight: 600;
  }
`;
const RoadMapItem = ({ title, subtext, text }) => {
  return (
    <Item>
      <ItemContainer>
        <Box>
          <SubTitle> {title} </SubTitle>
          <Text> {subtext} </Text>
          <EverlastingRulerText> {text} </EverlastingRulerText>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
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
        <Title>Roadmap </Title>
        <Container>
          <Items>
            <Item>&nbsp;</Item>
            <RoadMapItem
              title="UI/UX Update"
              subtext="UI/UX will be updated for a better quality of life to Ō-Inari NFT Owners and visitors alike."
            />
            <RoadMapItem
              title="Grand Offering"
              subtext="Ō-Inari will make the royalties go towards the community and project developement."
            />
            <RoadMapItem
              title="Alliances"
              subtext="Ō-Inari will seek and forge alliances with those within the Blockchain, Metaverse, and NFT space for growth."
            />
            <RoadMapItem
              title="Kami Resurrection"
              subtext="Once all of Inari's Fox Familiars have been adopted, the Kami from across the universe, multiverse, and metaverse will join alongside you and your familiars."
            />
            <RoadMapItem
              title="Divine Guidance"
              subtext="Ō-Inari and Familiars alike do not know the ultimate goal. What is known is that divine expansion is the directive from"
              text="The Everlasting Ruler"
            />
          </Items>
        </Container>
      </Section>
    </motion.div>
  );
};

export default Roadmap;
