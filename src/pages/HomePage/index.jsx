import { Header } from "@/components/ui/Header";
import { Container } from "@/components/ui/Container";
import { Main } from "@/components/ui/Main";
import { Hero } from "@/components/HomePage/Hero";
import { Projects } from "@/components/HomePage/projects";
import { Skills } from "@/components/HomePage/Skills";
import { About } from "@/components/HomePage/About";
import { Contacts } from "@/components/HomePage/Contacts";
import { Footer } from "@/components/ui/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Main>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contacts />
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
