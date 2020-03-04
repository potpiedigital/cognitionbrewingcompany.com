const Nav = ({ children }) => (
  <nav>
    <h1>Cognition Brewery</h1>
    <div id="menuToggle">
      <input type="checkbox" />

      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        {React.Children.map(children, child => (
          <li>{child}</li>
        ))}
      </ul>
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
        transform: rotate(-90deg) translateX(-100%);
        background-color: #ededed;
        display: flex;
        align-items: center;
      }
      h1 {
        margin: 0;
        padding: 20px 0;
        transform: rotate(180deg);
      }
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      li {
        display: inline-block;
        margin-left: 1em;
      }

      /* Here goes nothing */

      #menuToggle {
        display: block;
        position: relative;
        top: 240px;
        left: 215px;
        transform: rotate(90deg);
        z-index: 1;

        -webkit-user-select: none;
        user-select: none;
      }

      #menuToggle a {
        text-decoration: none;
        color: #232323;

        transition: color 0.3s ease;
      }

      #menuToggle a:hover {
        color: tomato;
      }

      #menuToggle input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;

        cursor: pointer;

        opacity: 0; /* hide this */
        z-index: 2; /* and place it over the hamburger */

        -webkit-touch-callout: none;
      }

      /*
 * Just a quick hamburger
 */
      #menuToggle span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;

        background: #cdcdcd;
        border-radius: 3px;

        z-index: 1;

        transform-origin: 4px 0px;

        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
          background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
      }

      #menuToggle span:first-child {
        transform-origin: 0% 0%;
      }

      #menuToggle span:nth-last-child(2) {
        transform-origin: 0% 100%;
      }

      /*
 * Transform all the slices of hamburger
 * into a crossmark.
 */
      #menuToggle input:checked ~ span {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: #232323;
      }

      /*
 * But let's hide the middle one.
 */
      #menuToggle input:checked ~ span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      /*
 * Ohyeah and the last one should go the other direction
 */
      #menuToggle input:checked ~ span:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, -1px);
      }

      #menu {
        position: absolute;
        width: 400px;
        margin: -100px 0 0 -50px;
        padding: 50px;
        padding-top: 125px;

        background: #ededed;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        /* to stop flickering of text in safari */

        transform-origin: 0% 0%;
        transform: translate(-100%, 0);

        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
      }

      #menu li {
        padding: 10px 0;
        font-size: 22px;
      }

      /*
 * And let's slide it in from the left
 */
      #menuToggle input:checked ~ ul {
        transform: none;
      }
    `}</style>
  </nav>
);

export default Nav;
