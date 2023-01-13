import React from 'react';
import styled from "@emotion/styled";
import Button from "./button";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faBook, faHome} from "@fortawesome/free-solid-svg-icons";

const NavBarContainer = styled('div')` 
  height: 64px;
  width: 100%;
  background: #202937;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 20px;
`;

const TabContainer = styled('div')`
    display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const NavIcons = styled('div')`
    display: flex;
`;

const Logo = styled('div')`
    padding: 14px;
  :hover{
    cursor: pointer;
  }
`;


const NavBar = () => {
    return (
        <NavBarContainer>
            <div>
                <TabContainer>
                    <ul className=" pt-5 px-10 flex flex-row justify-center align-middle font-bold text-white">
                        <li><div className="h-12 px-1.5 items-center"><Link to="/login"><span className="ml-2">Login</span></Link></div></li>
                        <li><div className="h-12 px-1.5 items-center"><Link to="/signup"><span className="ml-2">Signup</span></Link></div></li>
                    </ul>
                </TabContainer>
            </div>
        </NavBarContainer>
    );
}
export default NavBar;