import Hamburger from "./Hamburger";
const Nav = ({ children, isNavShowing, setIsNavShowing }) => (
  <nav>
    <Hamburger isNavShowing={isNavShowing} setIsNavShowing={setIsNavShowing} />
    <ul className={!isNavShowing && "hiding"}>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
    <h1>Cognition Brewery</h1>
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
        transform: rotate(90deg) translateY(-100%);
        background-color: #ededed;
        display: flex;
        align-items: center;
      }
      .hiding {
        display: none;
      }
      h1 {
        margin: 0;
        padding: 20px 0;
        width: 50%;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        flex: 1;
        flex-direction: column;
        position: absolute;
        bottom: 100%;
        left: 0;
        transform: rotate(-90deg) translateY(100%);
        transform-origin: bottom left;
      }
      li {
        display: inline-block;
        margin-left: 1em;
      }
    `}</style>
  </nav>
);

export default Nav;
