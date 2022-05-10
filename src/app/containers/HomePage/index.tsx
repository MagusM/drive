import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components";

const PageContainer = styled.div`
  ${tw`
    flex 
    flex-col 
    w-full 
    h-full 
    items-center 
    overflow-x-hidden
  `}
`;

const HomePage: React.FC = () => {
    return (
        <PageContainer>
            <Navbar></Navbar>
            Buy a car !
        </PageContainer>
    )
}

export default HomePage;