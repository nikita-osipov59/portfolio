import React from "react";

import { Container } from "../../components/ui/Container";
import Header from "../../components/Header";
import { Main } from "../../components/ui/Main";
import Hero from "../../components/Hero";
import Projects from "../../components/projects";
import Skills from "../../components/Skills";
import About from "../../components/About";
import Contacts from "../../components/Contacts";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contacts />
        <Footer />
      </Main>
    </Container>
  );
};

export default Home;
