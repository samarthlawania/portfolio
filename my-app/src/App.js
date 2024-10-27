import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero";
import Contacts from "./Components/Contacts";
import Who from "./Components/Who";
import Works from "./Components/Works";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mandatory;
  scrolling-behavior: smooth;
  overflow-y: scroll;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Contacts />
      <Who />
      <Works />
    </Container>
  );
}

export default App;
