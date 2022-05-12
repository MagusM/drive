import './App.css'
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { HomePage } from './app/containers/index';

const AppContainer = styled.div`
    ${tw`
        h-full 
        w-full 
        flex 
        flex-col
    `}
`;

const App: React.FC = () => {
    return (
        <AppContainer>
            <HomePage />
        </AppContainer>
    );
}

export default App
