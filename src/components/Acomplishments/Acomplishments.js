import React from "react";

import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 2000, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      <Box>
        <BoxNum>Top 5</BoxNum>
        <BoxText>
          Finalist in the Google "Mobile Launch Pad" Android Competition. Ranked Top 5 out of more than 150 participants
        </BoxText>
      </Box>
      <Box>
        <BoxNum>1300+</BoxNum>
        <BoxText>
          Created a Learning English Platform that helped more than 1300 students learn English in Vietnam. The platform
          is currently down and being turned into a mobile app
        </BoxText>
      </Box>
    </Boxes>
  </Section>
);

export default Acomplishments;
