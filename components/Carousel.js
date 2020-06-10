// import Brews from "./Brews";
import Forage from "./Forage";
import Historic from "./Historic";
import Colab from "./Colab";
import Blog from "./Blog";
import About from "./About";
import TapList from "./TapList";
import Hero from "./Hero";
import Events from "./Events";
import Nav from "../components/Nav";
import Section from "./Section";
import { useState, useEffect } from "react";
import { ImageBreak } from "./Image-break";

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

      @media screen and (orientation: portrait) {
        div {
          flex-direction: column;
        }
      }
    `}</style>
  </div>
);

const getSection = (event) => {
  const { href } = event.target;
  const indexOf = href.indexOf("#") + 1;
  return href.substring(indexOf);
};

const CarouselContainer = ({ items, onDeck }) => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const onClickNavItem = (event) => {
    setActiveSection(getSection(event));
    setIsNavShowing(false);
  };

  useEffect(() => {
    const options = { root: document.querySelector("main"), threshold: 0.8 };
    const onIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.8) {
          // console.log(entry.target.id, entry.intersectionRatio);
          // window.location.hash = "#" + entry.target.id;
          history.pushState({}, "", "#" + entry.target.id);
          setActiveSection(entry.target.id);
          document.documentElement.style.setProperty(
            "--navBackground",
            {
              home: "transparent",
              about: "#a73a3a",
              "tap-list": "white",
              events: "#a73a3a",
              brews: "#a73a3a",
            }[entry.target.id] ?? "white"
          );
          document.documentElement.style.setProperty(
            "--navColor",
            { "tap-list": "black", blog: "black" }[entry.target.id] ?? "white"
          );
          document.documentElement.style.setProperty(
            "--navBorder",
            {
              about: "#a73a3a",
              events: "#a73a3a",
              brews: "#a73a3a",
            }[entry.target.id] ?? "black"
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
        <Hero />
        <About />
        <ImageBreak src="/Cognition-Brewing-1.jpg" />
        <TapList items={items} onDeck={onDeck} />
        <ImageBreak src="/Cognition-Brewing-2.jpg" />
        <Events />
        <ImageBreak src="/Cognition-Brewing-1.jpg" />
        <Blog />
        <ImageBreak src="/Cognition-Brewing-2.jpg" />
        <Forage />
        <ImageBreak src="/Cognition-Brewing-2.jpg" />
        <Historic />
        <ImageBreak src="/Cognition-Brewing-2.jpg" />
        <Colab />
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
        @media screen and (max-width: 414px) {
          a {
            font-size: 5vh;
            line-height: 20px;
          }
        }
      `}</style>
    </main>
  );
};

export default CarouselContainer;
