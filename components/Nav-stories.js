const NavStories = () => (
  <nav>
    <h6>Cognition Brewery</h6>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/stories">More Stories</a>
      </li>
    </ul>
    <p>Ishpeming | Michigan</p>
    <style jsx>{`
      nav {
        display: flex;
        align-items: center;
      }
      ul {
        margin: auto 0;
        padding: 0 0 0 5em;
        list-style-type: none;
        display: flex;
        flex: 1;
        justify-content: center;
      }
      li {
        display: inline-block;
        margin-left: 1em;
      }
      h6 {
        font-family: "Source Serif Pro", serif;
        font-size: 1.7vw;
        font-weight: normal;
        margin: 0;
      }
      a {
        text-decoration: none;
        color: black;
        font-family: "Source Serif Pro", serif;
        font-size: 1.7vw;
        font-weight: normal;
      }
    `}</style>
  </nav>
);

export default NavStories;
