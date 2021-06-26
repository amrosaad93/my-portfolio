import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillGitlab } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem>+201003856384</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:amro.gamal2000@gmail.com">amro.gamal2000@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Learning is a life long quest that never stops. My desire to improve and learn never stops either.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/amrosaad93">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://gitlab.com/amrosaad">
            <AiFillGitlab size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/amro-saad-4a987694/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/amro.gamal93/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
