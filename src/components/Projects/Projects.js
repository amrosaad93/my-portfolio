import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image} />
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
            <CardInfo>{project.description}</CardInfo>
            <div>
              <TagList>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>#{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={project.visit}>Project</ExternalLinks>
              {project.source !== "" && <ExternalLinks href={project.source}>Github Code</ExternalLinks>}
            </UtilityList>
          </TitleContent>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
