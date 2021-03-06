import Hamburger from "./Hamburger";
import Social from "./Social-icons.js";

const Nav = ({
  rotate = true,
  children,
  isNavShowing,
  setIsNavShowing = () => {},
  activeSection,
}) => (
  <nav className={activeSection}>
    <Hamburger isNavShowing={isNavShowing} setIsNavShowing={setIsNavShowing} />
    <ul className={!isNavShowing && "hiding"}>
      {React.Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
    <div className="bar-content">
      <h6>Cognition Brewery</h6>
      <Social />
      <p>Ishpeming | Michigan</p>
    </div>
    <style jsx>{`
      nav {
        /* 1. take it out of "page flow" */
        position: absolute;
        /* 2. make it as wide as the page is tall */
        width: 100vh;
        /* 3. from the top left corner */
        transform-origin: top left;
        /* 4. rotate 90deg counter-clockwise */
        /* 5. translate "left" 100% of its width */
        ${rotate && "transform: rotate(90deg) translateY(-100%);"}
        background: var(--navBackground);
        color: var(--navColor);
        border-top: 1px solid var(--navBorder);
        display: flex;
        align-items: center;
        z-index: 3;
      }
      nav.about {
        background-color: #a73a3a;
      }
      .hiding {
        display: none;
      }
      h1 {
        margin: 0;
        padding: 20px 0;
        color: inherit;
      }
      p {
        color: inherit;
      }
      ul {
        margin: auto 0;
        padding: 0 0 0 5em;
        list-style-type: none;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        bottom: 100%;
        left: 0;
        background-color: #a73a3a;
        width: 85vw;
        height: 100vh;
        transform: rotate(-90deg) translateY(100%);
        transform-origin: bottom left;
      }
      li {
        display: inline-block;
        margin-left: 1em;
      }
      .bar-content {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      h6 {
        color: inherit;
      }
      @media screen and (max-width: 1024px) and (orientation: landscape) {
        nav {
          width: 100%;
        }
        .bar-content {
          width: 60%;
          justify-content: space-evenly;
        }
      }
      @media screen and (orientation: portrait) {
        nav {
          transform: rotate(0deg);
          width: 100vw;
          border-top: none;
          background: #a73a3a;
          color: "white";
        }
        ul {
          bottom: inherit;
          top: 0;
          left: inherit;
          padding: 0;
          transform: rotate(0deg);
          height: 80vh;
          width: 100vw;
        }
        li {
          padding-top: 1rem;
        }
      }
      @media screen and (max-width: 414px) {
        h6 {
          display: none;
        }
        ul {
          height: 50vh;
          padding-top: 2rem;
        }
        li {
          font-size: 5vh;
          padding-top: 0;
          padding-left: 3rem;
        }
      }
      @media screen and (max-width: 320px) {
        p {
          font-size: 12px;
        }
      }
    `}</style>
  </nav>
);

export default Nav;
