import React from "react";

import { Container } from "./components/ui/Container";
import Header from "./components/Header";
import { Main } from "./components/ui/Main";
import Home from "./components/Home";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Home />
        <Projects />
        <Skills />
        <About />
        <Contacts />
      </Main>
    </Container>
  );
}

export default App;
