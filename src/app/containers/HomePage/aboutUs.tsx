import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {SCREENS} from "../../components";
import JeepImg from '/src/assets/images/jeep.png';

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
  
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
    md:w-4/5
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

const AboutUs = () => {

    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} alt="Jeep" />
            </CarContainer>
            <InfoContainer>
                <Title>Feel The Best Experience With Our Car Dealers</Title>
                <InfoText>
                    Drive is working with the best car dealers in the country. <br />
                    We will be with in all the process helping you find your the best car for you.<br />
                    We will insure you will have the best experience buying your next car.<br />
                    We will Help you with the best loan for your next car with few clicks.<br />
                    We will handle car delivery to you, so your new car will come to you.<br />
                    Drive is working with the best car dealers in the country. <br />
                    We will be with in all the process helping you find your the best car for you.<br />
                    We will insure you will have the best experience buying your next car.<br />
                    We will Help you with the best loan for your next car with few clicks.<br />
                    We will handle car delivery to you, so your new car will come to you.
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    );
}

export default AboutUs;