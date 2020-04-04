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
  maxWidth: "2400px",
  flexBasis: "auto"
};

const fullStyle = {
  maxWidth: "100vw"
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

const getSection = event => {
  const { href } = event.target;
  const indexOf = href.indexOf("#") + 1;
  return href.substring(indexOf);
};

const CarouselContainer = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const onClickNavItem = event => {
    setActiveSection(getSection(event));
  };
  return (
    <main>
      <Nav
        isNavShowing={isNavShowing}
        setIsNavShowing={setIsNavShowing}
        activeSection={activeSection}
      >
        <a
          className={activeSection === "home" && "active"}
          onClick={onClickNavItem}
          href="#home"
        >
          Home
        </a>
        <a
          className={activeSection === "about" && "active"}
          onClick={onClickNavItem}
          href="#about"
        >
          About
        </a>
        <a
          className={activeSection === "tap-list" && "active"}
          onClick={onClickNavItem}
          href="#tap-list"
        >
          Tap List
        </a>
        <a
          className={activeSection === "events" && "active"}
          onClick={onClickNavItem}
          href="#events"
        >
          Cog Events
        </a>
        <a
          className={activeSection === "blog" && "active"}
          onClick={onClickNavItem}
          href="#blog"
        >
          Cog Blog
        </a>
        <a
          className={activeSection === "brews" && "active"}
          onClick={onClickNavItem}
          href="#brews"
        >
          Cog Brews
        </a>
      </Nav>
      <Coursel>
        {/* <Section style={fullStyle} id="home">
          <Hero />
        </Section>
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
        </Section>*/}
        <Section id="brews">
          <Brews />
        </Section>
      </Coursel>
      <style jsx>{`
        a {
          text-decoration: none;
          position: relative;
          color: #000000;
          font-size: 12vh;
          line-height: 105px;
          font-family: "Libre Franklin", sans-serif;
          font-weight: bold;
        }
        a.active::after,
        a:active::after {
          content: "";
          width: 100%;
          height: 1px;
          background: #fff;
          position: absolute;
          top: 50%;
          left: 0;
        }
      `}</style>
    </main>
  );
};

export default CarouselContainer;
