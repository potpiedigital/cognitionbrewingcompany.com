const NavStories = () => (
  <nav>
    <h6>
      <a href="/">Cognition Brewery</a>
    </h6>
    <ul>
      <li>
        <a href="/#tap-list">Tap List</a>
      </li>
      <li>
        <a href="/#events">Events</a>
      </li>
    </ul>

    <style jsx>{`
      nav {
        display: flex;
        align-items: center;
      }
      ul {
        margin: auto 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        flex: 1;
        justify-content: flex-end;
      }
      li {
        display: inline-block;
        margin-right: 3em;
      }
      li:last-child {
        margin-right: 0;
      }
      h6 {
        font-family: "Libre Franklin";
        font-size: 2vw;
        font-weight: bold;
        margin: 0;
      }
      a {
        text-decoration: none;
        color: black;
        font-family: "Source Serif Pro", serif;
      }
      @media screen and (max-width: 414px) {
        nav {
          width: 90%;
          margin: 0 auto;
        }
      }
    `}</style>
  </nav>
);

export default NavStories;
