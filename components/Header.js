import Link from "next/link";

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="../components/AboutNew">
      <a>About</a>
    </Link>
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
