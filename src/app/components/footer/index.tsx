import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Logo} from "../index";
import {faEnvelope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.div`
  //min-height: 24em;
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
  `};
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `};
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
    text-gray-300
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
  `};
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `};
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `};
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `};

  & > a {
    ${tw`
      text-sm
      text-white
      transition-all
      hover:text-gray-200
    `};
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `};
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const RedIcon = styled.span`
  ${tw`
    w-7
    h-7
    md:w-9
    md:h-9
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
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
                {/*SECTION 3*/}
                <SectionContainer>
                    <HeaderTitle>Call Now</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </RedIcon>
                        {/*todo: take number for env*/}
                        <SmallText><a href="tel:0542055028">Call Us</a></SmallText>
                    </HorizontalContainer>
                </SectionContainer>
                {/*SECTION 4*/}
                <SectionContainer>
                    <HeaderTitle>Mail</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </RedIcon>
                        {/*todo: take email for env*/}
                        <SmallText><a href="mailto:test@gmail.com">Email Us</a></SmallText>
                    </HorizontalContainer>
                </SectionContainer>
                <BottomContainer>
                    <CopyrightText>
                        Copyright &copy; {new Date().getFullYear()} Drive. All rights
                        reserved.
                    </CopyrightText>
                </BottomContainer>
            </InnerContainer>
        </FooterContainer>
    );
}

export default Footer;

