import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {BookCard, Marginer, Navbar} from "../../components";
import TopSection from "./topSection/topSection";

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
            <Navbar />
            <TopSection />
            <Marginer direction="vertical" margin="4em" />
            <BookCard />
        </PageContainer>
    )
}

export default HomePage;