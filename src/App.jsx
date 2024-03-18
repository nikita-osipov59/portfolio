import React from "react";

import { Container } from "./components/ui/container";
import Header from "./components/Header";
import { Main } from "./components/ui/Main";
import Home from "./components/Home";
import Projects from "./components/projects";

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Home />
        <Projects />
      </Main>
    </Container>
  );
}

export default App;
