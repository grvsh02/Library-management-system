import React from 'react';
import styled from "@emotion/styled";
import Button from "./button";

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

const items = ["Login","Signup"]

const NavBar = () => {
    return (
        <NavBarContainer>
            <div>
                <TabContainer>
                    <Button className='xs'  type="primary">
                        Login
                    </Button>
                    <Button className='xs'  type="primary">
                        Signup
                    </Button>
                </TabContainer>
            </div>
        </NavBarContainer>
    );
}
export default NavBar;