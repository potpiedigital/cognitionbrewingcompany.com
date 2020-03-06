import Hamburger from "./Hamburger";
const Nav = ({ children }) => (
  <nav>
    <h1>Cognition Brewery</h1>
    <ul>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
    <Hamburger />
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
        transform: rotate(-90deg) translateX(-100%);
        background-color: #ededed;
        display: flex;
        align-items: center;
      }
      h1 {
        margin: 0;
        padding: 20px 0;
        transform: rotate(180deg);
        width: 50%;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        /* flex-direction: column; */
        flex: 1;
      }
      li {
        display: inline-block;
        margin-left: 1em;
      }
    `}</style>
  </nav>
);

export default Nav;
