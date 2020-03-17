import Brews from "./Brews";
import Blog from "./Blog";
import About from "./About";
import TapList from "./TapList";
import Hero from "./Hero";
import Events from "./Events";
import Nav from "../components/Nav";
import Section from "./Section";
import { useState } from "react";

const bigStyle = {
  width: "200vw",
  backgroundColor: "pink",
  flexBasis: "auto"
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

const CarouselContainer = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <main>
      <Nav isNavShowing={isNavShowing} setIsNavShowing={setIsNavShowing}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#tap-list">Tap List</a>
        <a href="#events">Cog Events</a>
        <a href="#blog">Cog Blog</a>
        <a href="#brews">Cog Brews</a>
      </Nav>
      <Coursel>
        {/* <Section id="home">
          <Hero />
        </Section> */}
        <Section id="about">
          <About />
        </Section>

        <Section style={bigStyle} id="tap-list">
          <TapList />
        </Section>
        <Section id="events">
          <Events />
        </Section>
        <Section id="blog">
          <Blog />
        </Section>
        <Section style={bigStyle} id="brews">
          <Brews />
        </Section>
      </Coursel>
      <style jsx>{`
        main {
          overflow: hidden;
        }

        a {
          text-decoration: none;
          color: #000000;
          font-size: 12vh;
          line-height: 105px;
          font-family: "Libre Franklin", sans-serif;
          font-weight: bold;
        }
        a:active {
          text-decoration: line-through;
          color: #fff;
        }
      `}</style>
    </main>
  );
};

export default CarouselContainer;
