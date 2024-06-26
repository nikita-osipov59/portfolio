import { Header } from "@/components/ui/Header";
import { Container } from "@/components/ui/Container";
import { Main } from "@/components/ui/Main";
import { About } from "@/components/AboutPage/About";
import { Hardware } from "@/components/AboutPage/Hardware";
import Footer from "@/components/ui/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Main>
          <About />
          <Hardware />
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default AboutPage;
