import "./App.css";
import Hero from "./Components/Hero";
import Contacts from "./Components/Contacts";
import Who from "./Components/Who";
import Works from "./Components/Works";
import styled from "styled-components";
import Technology from "./Components/Technology";
const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Technology />
      <Works />
      <Contacts />
    </Container>
  );
}

export default App;
