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

const CarouselContainer = ({ items, onDeck, pages, posts }) => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const onClickNavItem = (event) => {
    setActiveSection(getSection(event));
    setIsNavShowing(false);
  };

  const eventsPage = pages.find((p) => p.slug === "cog-events");
  const aboutPage = pages.find((p) => p.slug === "about");
  const tapListPage = pages.find((p) => p.slug === "tap-list");

  useEffect(() => {
    //how do I make this mobile responsive? right now background stays transparent throughout
    const options = { root: document.querySelector("main"), threshold: 0.8 };
    const onIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.8) {
          history.pushState({}, "", "#" + entry.target.id);
          setActiveSection(entry.target.id);
          document.documentElement.style.setProperty(
            "--navBackground",
            {
              home: "transparent",
              [aboutPage.slug]: "#a73a3a",
              [tapListPage.slug]: "white",
              [eventsPage.slug]: "#a73a3a",
              brews: "#a73a3a",
              historic: "white",
              colab: "#a73a3a",
            }[entry.target.id] ?? "white"
          );
          document.documentElement.style.setProperty(
            "--navColor",
            { [tapListPage.slug]: "black", blog: "black", historic: "black" }[
              entry.target.id
            ] ?? "white"
          );
          document.documentElement.style.setProperty(
            "--navBorder",
            {
              [aboutPage.slug]: "#a73a3a",
              [eventsPage.slug]: "#a73a3a",
              brews: "#a73a3a",
              historic: "black",
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
          {pages.find((p) => p.slug === "hero").title.rendered}
        </a>
        {[aboutPage, tapListPage, eventsPage].map(
          (page) =>
            page && (
              <a
                className={activeSection === page.slug && "active"}
                onClick={onClickNavItem}
                href={`#${page.slug}`}
                key={page.slug}
              >
                {page.title.rendered}
              </a>
            )
        )}
        {posts.length > 0 && (
          <a
            className={activeSection === "blog" && "active"}
            onClick={onClickNavItem}
            href="#blog"
          >
            Cog Blog
          </a>
        )}
        <a
          className={activeSection === "brews" && "active"}
          onClick={onClickNavItem}
          href="#brews"
        >
          {pages.find((p) => p.slug === "forage").title.rendered}
        </a>
      </Nav>
      <Coursel>
        <Hero page={pages.find((p) => p.slug === "hero")} />
        <About page={pages.find((p) => p.slug === "about")} />
        <ImageBreak
          page={pages.find((p) => p.slug === "image-dividers")}
          src="img_one"
        />
        <TapList
          page={pages.find((p) => p.slug === "tap-list")}
          items={items}
          onDeck={onDeck}
        />
        <ImageBreak
          page={pages.find((p) => p.slug === "image-dividers")}
          src="img_two"
        />
        {eventsPage && <Events page={eventsPage} />}
        <ImageBreak
          page={pages.find((p) => p.slug === "image-dividers")}
          src="img_three"
        />
        {posts.length > 0 && <Blog post={posts[0]} />}
        <ImageBreak
          page={pages.find((p) => p.slug === "image-dividers")}
          src="img_four"
        />
        <Forage page={pages.find((p) => p.slug === "forage")} />
        <ImageBreak
          page={pages.find((p) => p.slug === "image-dividers")}
          src="img_five"
        />
        <Historic page={pages.find((p) => p.slug === "historic")} />
        <ImageBreak
          page={pages.find((p) => p.slug === "image-dividers")}
          src="img_six"
        />
        <Colab page={pages.find((p) => p.slug === "collaboration")} />
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
