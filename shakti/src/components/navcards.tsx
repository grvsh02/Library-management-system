import React from "react";
import styled from '@emotion/styled';


type Card = {
    title?: string,
    image?: string,
    height?: string,
    width?: string,
    className?: string,
}

const NavcardsContainer = styled('div')`
  background: #fff;
  font-family: Pangram, sans-serif;

  :hover {
    cursor: pointer;
    background: #e2e2ff;
  }
`;

const Navcards = ({ title,image, className = '' }: Card) =>  (
    <NavcardsContainer className={className}>
        <div className="px-2 pt-2">
                <img src={image} alt
                ={title} className="h-32 w-32 mx-auto" />
            </div>
        <div className="px-2 pt-2">
                <h3 className="text-3xl mb-2 font-semibold">
                    {title}
                </h3>
        </div>
    </NavcardsContainer>
);

export default Navcards;
