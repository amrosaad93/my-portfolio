import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./IntroStyles";

const Hero = (props) => (
  <Section nopadding row>
    <LeftSection>
      <SectionTitle main center>
        Welcome to Amro's Portfolio
        <br />
      </SectionTitle>
      <SectionText>
        A Software Developer with focus on Front End Development. I have experience working in big international
        organizations as well as working in small teams and individually as a freelance ReactJS Developer.
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
