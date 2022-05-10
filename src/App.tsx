import './App.css'
import React from "react";


import { HomePage } from './app/containers/index';
import styled from "styled-components";
import tw from "twin.macro";


const SomeDiv = styled.div`
    width: 100px;
    height: 100px;
    ${tw`bg-black`}
`;

const App: React.FC = () => {
    return (

        <div className="h-full w-full w-full flex flex-col">
            <SomeDiv>s</SomeDiv>
            <HomePage></HomePage>
        </div>
    );
}

export default App
