// import Brews from "./Brews";
// import Blog from "./Blog";
import About from "./About";
import TapList from "./TapList";
// import Events from "./Events";
import Nav from "../components/Nav";
import Section from "./Section";

const bigStyle = {
  width: "200vw",
  backgroundColor: "#ededed"
};

const Coursel = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        display: flex;
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    `}</style>
  </div>
);

const CarouselContainer = () => (
  <main>
    <Nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#two">two</a>
      <a href="#three">three</a>
      <a href="#four">four</a>
      <a href="#five">five</a>
    </Nav>
    <Coursel>
      <Section id="home"></Section>
      <Section id="about">
        <About />
      </Section>
      <Section style={bigStyle} id="tapList">
        <TapList />
      </Section>
      <Section id="three">three</Section>
      <Section id="four">four</Section>
      <Section id="five">five</Section>
    </Coursel>
    <style jsx>{`
      main {
        overflow: hidden;
      }
    `}</style>
  </main>
);

export default CarouselContainer;
