import { ethers } from "ethers";
import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import Logo from "../components/Logo";
import { ConnectWallet, ThirdwebProvider } from "@thirdweb-dev/react";
import Hero from "../components/Hero";

export const changeNetwork = async ({ setError }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x4" }],
    });
  } catch (err) {
    setError(err.message);
  }
};



const StyledLink = styled.a`
  width: fit-content;
  height: fit-content;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <ThirdwebProvider>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.15,
          duration: 0.75,
        }}
        className={"navbar"}
      >
        <Head>
          <title>Ō-Inari</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Link href="/" passHref>
          <StyledLink>
            <Logo> Ō-Inari </Logo>
          </StyledLink>
        </Link>
        <ul
          className={isOpen === false ? "navmenu" : "navmenu" + " " + "active"}
        >
          <li className={"card1"}>
            <Link href="/about" passHref>
              <StyledLink onClick={closeMenu}>About</StyledLink>
            </Link>
          </li>
          <li className={"card2"}>
            <Link href="/manifest" passHref>
              <StyledLink onClick={closeMenu}>Manifest</StyledLink>
            </Link>
          </li>
          <li className={"card3"}>
            <Link href="/mint" passHref>
              <StyledLink onClick={closeMenu}>Mint</StyledLink>
            </Link>
          </li>
          <li className={"card4"}>
            <Link href="/faq" passHref>
              <StyledLink onClick={closeMenu}>FAQ</StyledLink>
            </Link>
          </li>
          <div></div>
        </ul>

        <button
          className={
            isOpen === false ? "hamburger" : "hamburger" + " " + "active"
          }
          onClick={openMenu}
        >
          <span className={"bar"}></span>
          <span className={"bar"}></span>
          <span className={"bar"}></span>
        </button>
        <div className="btn">
        <ConnectWallet />
        </div>
      </motion.div>
    </ThirdwebProvider>
  );
};

export default Navbar;
