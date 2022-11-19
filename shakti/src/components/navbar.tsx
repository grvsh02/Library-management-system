import React from 'react';
import styled from "styled-components";
import Button from "./button";

const NavBarContainer = styled('div')` 
  height: 64px;
  width: 100%;
  background: darkblue;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 20px;
`;

const TabContainer = styled('div')`
    display: flex;
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

const items = ["Manage your Librarian"]

const NavBar = () => {
    return (
        <NavBarContainer>
            <div>
                <TabContainer>
                    {items?.map((item, index: any) => {
                        return (
                            <Button className='m-2' onClick={() => setSelected(index)} type="selected">
                                {item}
                            </Button>
                        )
                    })}
                </TabContainer>
            </div>
        </NavBarContainer>
    );
}
export default NavBar;