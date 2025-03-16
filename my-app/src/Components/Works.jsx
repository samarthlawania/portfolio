import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import styled from "styled-components";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { experiences } from "../constants";
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

const ExperienceContainer = styled.div`
  margin-top: 5rem;
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(29, 24, 54, 1);
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const CompanyInfo = styled.div`
  h3 {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }

  h4 {
    color: #aaa;
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
`;

const DateLocation = styled.div`
  color: #888;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const CompanyLink = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-left: 0.5rem;
  
  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: #aaa;
    transition: color 0.3s ease;
    
    &:hover {
      color: white;
    }
  }
`;

const ExperienceCardComponent = ({ experience }) => {
  const { title, company_name, date, points, link } = experience;
  
  return (
    <ExperienceCard
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <ExperienceHeader>
        <CompanyInfo>
          <h3>{title}</h3>
          <h4>
            {company_name}
            {link && (
              <CompanyLink onClick={() => window.open(link, "_blank")}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" 
                  />
                </svg>
              </CompanyLink>
            )}
          </h4>
        </CompanyInfo>
        <DateLocation>
          <div>{date}</div>
        </DateLocation>
      </ExperienceHeader>
      
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-secondary text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </ExperienceCard>
  );
};

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
    < >
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

      <ProjectsContainer id="projects" style={{paddingRight: "100px"}}>
        {projects.map((project, index) => (
          <ProjectCardComponent
            key={`project-${index}`}
            index={index}
            {...project}
            height={451}
          />
        ))}
      </ProjectsContainer>

      <ExperienceContainer>
        <motion.div 
          variants={textVariant()}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <p className={styles.sectionSubText}>Where I've worked</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          {experiences.map((experience, index) => (
            <ExperienceCardComponent
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </motion.div>
      </ExperienceContainer>
    </>
  );
};

export default SectionWrapper(Works, "work");