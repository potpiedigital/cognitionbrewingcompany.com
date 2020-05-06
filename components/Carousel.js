import Brews from "./Brews";
import Blog from "./Blog";
import About from "./About";
import TapList from "./TapList";
import Hero from "./Hero";
import Events from "./Events";
import Nav from "../components/Nav";
import Section from "./Section";
import { useState, useEffect } from "react";
import { ImageBreak } from "./Image-break";

const fullStyle = {
  width: "90vw",
  overflow: "visible",
};

const Coursel = ({ children }) => (
  <div
    onWheel={(event) => {
      event.currentTarget.scrollLeft += event.deltaY;
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

  useEffect(() => {
    const options = { root: document.querySelector("main"), threshold: 0.8 };
    const onIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.8) {
          console.log(entry.target.id, entry.intersectionRatio);
          // window.location.hash = "#" + entry.target.id;
          history.pushState({}, "", "#" + entry.target.id);
          document.documentElement.style.setProperty(
            "--navBackground",
            { home: "transparent", about: "#a73a3a", "tap-list": "white" }[
              entry.target.id
            ] ?? "white"
          );
          document.documentElement.style.setProperty(
            "--navColor",
            { home: "white", about: "black", "tap-list": "black" }[
              entry.target.id
            ] ?? "white"
          );
        }
      });
    };
    const observer = new IntersectionObserver(onIntersection, options);
    document.querySelectorAll("section").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  });

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
        <Section id="home">
          <Hero />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <ImageBreak src="/Cognition-Brewing-1.jpg" />
        <Section id="tap-list">
          <TapList />
        </Section>
        <ImageBreak src="/Cognition-Brewing-2.jpg" />
        <Section style={fullStyle} id="events">
          <Events />
        </Section>
        <ImageBreak src="/Cognition-Brewing-1.jpg" />
        <Section id="blog">
          <Blog />
        </Section>
        <ImageBreak src="/Cognition-Brewing-2.jpg" />
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
