import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`;

const Container  = styled.div`
  height :100vh;
  scroll-snap-align:center;
  display:flex;
  justify-content:space-between;
`;

const Text = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AnimatedPic = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

function Hero() {
  return <Section>
    <Navbar/>
      <Container>
          <Text style={{ marginLeft: "90px" }}>
            <Title>
              Innovative • User-Centric •  Reliable
            </Title>
            <WhatWeDo>
              <Line src="./img/line.png" />
              <Subtitle>What I do</Subtitle>
            </WhatWeDo>
            <Desc>Building seamless, scalable, and intuitive user experiences with modern tech.</Desc>
            <Button>Learn More</Button>
          </Text>

          <AnimatedPic>
            <Img src="./img/moon.png" />
          </AnimatedPic>
      </Container>
    </Section>;
}

export default Hero;
