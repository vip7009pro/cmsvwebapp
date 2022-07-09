import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { SidebarData } from "./Sidebardata";
import SubMenu from "./Submenu";
import { IconContext } from "react-icons/lib";
import MenuIcon from '@mui/icons-material/Menu';

const Nav = styled.div`
  background: white;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: white;  
  width: 350px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.29); 
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.20);
    margin-top: 5px;
    border-radius: 10px;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to='#'>
            <MenuIcon onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <MenuIcon onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
export default Sidebar;
