import {
  faBagShopping,
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MainStyle } from "../styles/globalStyled";

const SHeader = styled.div`
  width: 100%;
  padding: 25px 020px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  color: ${MainStyle.color};
  font-size: 40px;
  font-weight: 900;
`;
// ====================
const EtcWrap = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BagIcon = styled.div`
  font-size: 25px;
  color: ${MainStyle.color};
`;
const SearchIcon = styled.div`
  font-size: 25px;
  color: ${MainStyle.color};
`;
const LoginIcon = styled.div`
  font-size: 25px;
  color: ${MainStyle.color};
`;
// ===============
const Shop = styled.div`
  font-size: 18px;
  font-weight: 900;
  letter-spacing: -1px;
  margin: 30px 0 20px 0;
`;
const MenuWrap = styled.div`
  svg {
    font-size: 30px;
    color: ${MainStyle.color};
  }
`;
// =================
const Menus = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.poLeft};
  background-color: gray;
  width: 400px;
  height: 100vh;
  border-radius: 0 0 200px 0;
`;
const Menu = styled.div``;

export const Header = () => {
  const [click, setClick] = useState();
  const [show, setShow] = useState("-400px");
  const handleClick = () => {
    setShow("0");
  };

  return (
    <>
      <SHeader>
        <Wrap>
          <Logo>
            <Link to="/">SNP</Link>
          </Logo>

          <EtcWrap>
            <LoginIcon>
              <Link to="/login">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </LoginIcon>

            <SearchIcon>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchIcon>
            <BagIcon>
              <Link to="/shopping_bag">
                <FontAwesomeIcon icon={faBagShopping} />
              </Link>
            </BagIcon>
          </EtcWrap>
        </Wrap>
        <MenuWrap>
          <Shop>
            <Link to="/shop">SHOP</Link>
          </Shop>
          <FontAwesomeIcon icon={faBars} onClick={handleClick} />
        </MenuWrap>
      </SHeader>
      <Menus poLeft={show}>
        <Menu>
          <Link to="/shop">Shop</Link>
        </Menu>
        <Menu>
          <Link to="/community">Community</Link>
        </Menu>
      </Menus>
    </>
  );
};
