import appstore from "../assests/images/appstore.png";
import playstore from "../assests/images/playstore.png";
import styled from "styled-components";
const Nav = styled.div`
  background-color: black;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  bottom: 0;
  z-index: 10;
  color: white;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + 20};
`;
const NavContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;
const Flexwrapper = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 100px;
`;
const Footer = () => {
  return (
    <Nav>
      <NavContainer>&copy;Manu MN(Nutrifit-demo) </NavContainer>
      <Flexwrapper>
        <Image src={appstore}></Image>
        <Image src={playstore}></Image>
      </Flexwrapper>
    </Nav>
  );
};

export default Footer;
