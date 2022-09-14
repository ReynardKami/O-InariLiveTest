import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HomeLogo = styled.div`
  transition: all 0.2s ease-in-out;
  padding-top: 0.5rem;
  padding-left: 1.5rem;
  font-size: 2.6em;

  &:hover {
    transform: scale(1.3);
  }

  @media (max-width: 64em) {
    font-size: 2.1em;
  }

  @media (max-width: 48em) {
    font-size: 1.8em;
  }
`;

const Logo = () => {
  return (
    <Link href="/" passhref>
      <HomeLogo>Ō-Inari</HomeLogo>
    </Link>
  );
};

export default Logo;
