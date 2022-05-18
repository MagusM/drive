import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Logo} from "../index";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.div`
  min-height: 24em;
  background-color: #1d2124;
  ${tw`
    flex
    flex-wrap
    min-w-full
    // bg-gray-900
    pt-7
    md:pt-12
    pb-1
    items-center
    justify-center
  `}
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    w-full
    h-full
    max-w-screen-2xl
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
  `}
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`;

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
  `}
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `}
  & > a {
    ${tw`
      text-sm
      text-white
      hover:text-gray-200
      transition-all
    `}
  }
  
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-white
    mb-3
  `}
`;

const RedIcon = styled.span`
  ${tw`
    w-5
    h-5
    rounded-full
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `}
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `};
`;

const Footer = (props: any) => {

    return (
        <FooterContainer>
            <InnerContainer>
                <AboutContainer>
                    <Logo color="white" bgColor="dark" />
                    <AboutText>Drive is a marketplace working in many in many countries across the worlds having to rated cars.</AboutText>
                </AboutContainer>
                {/*SECTION 1*/}
                <SectionContainer>
                    <HeaderTitle>Our Links</HeaderTitle>
                    <LinksList>
                        <ListItem><a href="#">Home</a></ListItem>
                        <ListItem><a href="#">About Us</a></ListItem>
                        <ListItem><a href="#">Services</a></ListItem>
                        <ListItem><a href="#">Models</a></ListItem>
                        <ListItem><a href="#">Blog</a></ListItem>
                    </LinksList>
                </SectionContainer>
                {/*SECTION 2*/}
                <SectionContainer>
                    <HeaderTitle>Other Links</HeaderTitle>
                    <LinksList>
                        <ListItem><a href="#">FAQ</a></ListItem>
                        <ListItem><a href="#">Contact Us</a></ListItem>
                        <ListItem><a href="#">Support</a></ListItem>
                        <ListItem><a href="#">Privacy Policy</a></ListItem>
                        <ListItem><a href="#">Terms &amp; Conditions</a></ListItem>
                    </LinksList>
                </SectionContainer>
                {/*SECTION 2*/}
                <SectionContainer>
                    <HeaderTitle>Call Now</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </RedIcon>
                        <SmallText>+972542055028</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
                4:32:37

                Copyright &copy; {new Date().getFullYear()} Drive. All rights
                reserved.
            </InnerContainer>
        </FooterContainer>
    );
}

export default Footer;

