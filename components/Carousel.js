import Brews from "./Brews";
import Blog from "./Blog";
import About from "./About";
import TapList from "./TapList";
import Hero from "./Hero";
import Events from "./Events";
import Nav from "../components/Nav";
import Section from "./Section";
import { useState } from "react";
import { ImageBreak } from "./Image-break";

const fullStyle = {
  width: "100vw",
  overflow: "visible",
};

const Coursel = ({ children }) => (
  <div
    onWheel={(event) => {
      console.log(
        event.currentTarget.scrollLeft,
        event.deltaX,
        event.deltaY,
        event.deltaMode
      );
    }}
  >
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

const getSection = (event) => {
  const { href } = event.target;
  const indexOf = href.indexOf("#") + 1;
  return href.substring(indexOf);
};

const CarouselContainer = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const onClickNavItem = (event) => {
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
        <Section style={fullStyle} id="home">
          <Hero />
        </Section>
        <Section style={fullStyle} id="about">
          <About />
        </Section>
        <ImageBreak src="https://source.unsplash.com/1600x900/?nature,water" />
        <Section id="tap-list">
          <TapList />
        </Section>
        <ImageBreak src="https://source.unsplash.com/1600x900/?nature,water" />
        <Section style={fullStyle} id="events">
          <Events />
        </Section>
        <ImageBreak src="https://source.unsplash.com/1600x900/?nature,water" />
        <Section style={fullStyle} id="blog">
          <Blog />
        </Section>
        <ImageBreak src="https://source.unsplash.com/1600x900/?nature,water" />
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
