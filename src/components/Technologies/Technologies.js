import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have experience using a range of technologies mainly in the frontend development domain. I have a strong
      foundation of vanilla Javascript and using the React Framework. I have some experince building REST APIs with
      Nodejs and Express. I also have experience working with Firebase. I have knowledge building mobile applications
      with Flutter and React Native.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>ReactJS, AngularJS, TypeScript</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>Node.js, Express, MongoDB, Firebase</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RiFlutterFill size="3rem" />
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>Flutter, React Native</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
