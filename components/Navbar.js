// import Link from "next/link";
// import styled from "styled-components";
// import React, { useState } from "react";
// import Logo from "./Logo";
// import Home from "../pages";
// import { motion } from "framer-motion";

// const StyledLink = styled.a`
//   width: fit-content;
//   height: fit-content;
// `;

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <motion.div
//       initial={{ y: 25, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{
//         delay: 0.15,
//         duration: 0.75,
//       }}
//       className={"navbar"}
//     >
//       <Link href="/" passHref>
//         <StyledLink>
//           <Logo> Ō-Inari </Logo>
//         </StyledLink>
//       </Link>
//       <ul className={isOpen === false ? "navmenu" : "navmenu" + " " + "active"}>
//         <li className={"card1"}>
//           <Link href="/about" passHref>
//             <StyledLink onClick={closeMenu}>About</StyledLink>
//           </Link>
//         </li>
//         <li className={"card2"}>
//           <Link href="/manifest" passHref>
//             <StyledLink onClick={closeMenu}>Manifest</StyledLink>
//           </Link>
//         </li>
//         <li className={"card3"}>
//           <Link href="/mint" passHref>
//             <StyledLink onClick={closeMenu}>Mint</StyledLink>
//           </Link>
//         </li>
//         <li className={"card4"}>
//           <Link href="/faq" passHref>
//             <StyledLink onClick={closeMenu}>FAQ</StyledLink>
//           </Link>
//         </li>
//         <div></div>
//       </ul>

//       <button
//         className={
//           isOpen === false ? "hamburger" : "hamburger" + " " + "active"
//         }
//         onClick={openMenu}
//       >
//         <span className={"bar"}></span>
//         <span className={"bar"}></span>
//         <span className={"bar"}></span>
//       </button>

//       <div>
//         <Home />
//       </div>
//     </motion.div>
//   );
// };

// export default Navbar;
