// import Link from "next/link";

const Header = () => (
  <div>
    <ul>
      <li>
        <a href="#about-new">About</a>
      </li>
      <li>
        <a href="#tap-list">Tap List</a>
      </li>
      <li>
        <a href="#events">Cog Events</a>
      </li>
      <li>
        <a href="#blog">Cog Blog</a>
      </li>
      <li>
        <a href="#brews">Cog Brews</a>
      </li>
    </ul>
    <style jsx>
      {`
        a {
          margin-right: 15px;
          text-decoration: none;
          color: black;
        }

        a:hover {
          text-decoration: underline;
          color: grey;
        }
      `}
    </style>
  </div>
);

export default Header;
