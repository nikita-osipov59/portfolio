import React from "react";

import Container from "../../components/ui/Container";
import { Header } from "@/components/ui/Header";
import About from "@/components/AboutPage/About";
import { Hardware } from "@/components/AboutPage/Hardware";
import { Main } from "@/components/ui/Main";
import Footer from "@/components/ui/Footer";

const AboutPage = () => {
  return (
    <Container>
      <Header />
      <Main>
        <About />
        <Hardware />
      </Main>
      <Footer />
    </Container>
  );
};

export default AboutPage;
