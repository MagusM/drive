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
                    Your perfect car, one click away! <br />
                    You might be thinking “I need to buy a new car”, <br />
                    but do you have the time? <br />
                    Are you conducting the right checks at the dealership? <br />
                    With One Click Cars, <br />
                    you can buy or finance a car online, hassle-free, from the comfort of your home. <br />
                    If you don’t fall in love with the car for whatever reason, <br />
                    you can exchange or return it within 14 days for a full refund.
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    );
}

export default AboutUs;