import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

function Hero() {
  return <Section>
    <Navbar/>
    Hero
    </Section>;
}

export default Hero;
