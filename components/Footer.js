import Link from "next/link";
import styled from "styled-components";
import Twitter from "../Tags/Twitter";
import Opensea from "../Tags/Opensea";

const FooterSection = styled.div`
  background: black;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterSection2 = styled.div`
  background: black;
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled.a`
  padding: 0.2rem;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const Footer = () => {
  return (
    <div>
      <FooterSection>
        <Link href="https://twitter.com/O_InariNFT" passHref>
          <StyledLink>
            <Twitter />
          </StyledLink>
        </Link>
        <Link href="https://opensea.io" passHref>
          <StyledLink>
            <Opensea />
          </StyledLink>
        </Link>
      </FooterSection>
      <FooterSection2>
        <Link href="https://etherscan.io" passHref>
          <StyledLink>0x6591b5Dc10Ac1b394406d53aa1F3B42214666301</StyledLink>
        </Link>
      </FooterSection2>

      <FooterSection>
        &copy; {new Date().getFullYear()} Inari. All Rights Reserved.
      </FooterSection>
    </div>
  );
};

export default Footer;
