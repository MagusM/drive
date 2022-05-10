import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from '../index';

const NavvarContainer = styled.div`
    min-height: 68px;
    ${tw`
        w-full
        max-w-2xl
        flex
        flex-row
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
    `}
`;

const LogoContainer = styled.div`
  
`;

const Navbar: React.FC = () => {
    return (
        <NavvarContainer>
            <LogoContainer>
                <Logo></Logo>
            </LogoContainer>
        </NavvarContainer>
    )
}

export default Navbar;