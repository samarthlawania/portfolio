import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import styled from "styled-components";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  place-items: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  width: 100%;
  max-width: 360px;
  background: rgba(29, 24, 54, 1);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  opacity: 1 !important;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  color: white;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 230px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
  }
`;

const GithubButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
`;

const ProjectCardComponent = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <Tilt
      perspective={500}
      scale={1.02}
      transitionSpeed={550}
      className="w-full"
      style={{ height: 451 }}
    >
      <ProjectCard 
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <ProjectImage>
          <img src={image} alt={name} />
          <GithubButton onClick={() => window.open(source_code_link, "_blank")}>
            <img src={github} alt="github" />
          </GithubButton>
        </ProjectImage>

        <ProjectContent>
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>

          <TagsContainer>
            {tags.map((tag) => (
              <Tag
                key={`${name}-${tag.name}`}
                style={{ color: tag.color }}
              >
                #{tag.name}
              </Tag>
            ))}
          </TagsContainer>
        </ProjectContent>
      </ProjectCard>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcases my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories and live demos in it. It reflects my
        ability to solve complex problems, work with different technologies,
        and manage projects effectively.
      </motion.p>

      <ProjectsContainer style={{paddingRight: "100px"}}>
        {projects.map((project, index) => (
          <ProjectCardComponent
            key={`project-${index}`}
            index={index}
            {...project}
            height={451}
          />
        ))}
      </ProjectsContainer>
      </>
  );
};

export default SectionWrapper(Works, "work");