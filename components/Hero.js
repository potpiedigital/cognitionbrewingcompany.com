import Section from "./Section";

const Hero = ({ page }) => (
  <Section id="home">
    <div className="main">
      <h1>Cognition Brewing Company</h1>
      <div className="information">
        <div>
          <ul>
            <li>
              {page.acf.schedule[0].day}{" "}
              <span>
                {page.acf.schedule[0].opening_time} -{" "}
                {page.acf.schedule[0].closing_time}
              </span>
            </li>
            <li>
              {page.acf.schedule[1].day}{" "}
              <span>
                {page.acf.schedule[1].opening_time} -{" "}
                {page.acf.schedule[1].closing_time}
              </span>
            </li>
            <li>
              {page.acf.schedule[2].day}{" "}
              <span>
                {page.acf.schedule[2].opening_time} -{" "}
                {page.acf.schedule[2].closing_time}
              </span>
            </li>
          </ul>
          <address>{page.acf.address}</address>
          <a href={page.acf.phone}> {page.acf.phone}</a>
        </div>
        <h4>SCROLL SIDEWAYS TO NAVIGATE</h4>
      </div>
      <style jsx>{`
        .main {
          background-image: url(${page.acf.background_image});
          box-shadow: inset 0 0 0 50vw rgba(0, 0, 0, 0.3);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          height: 100%;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-direction: column;
          flex: 1 0 100%;
        }

        h1 {
          color: #fff;
          text-align: center;
          line-height: 20vh;
          width: 80%;
          margin: 0.5em 0 0 0;
        }

        .information {
          display: flex;
          align-items: flex-end;
          height: auto;
          width: 80%;
        }
        .information div {
          width: 80%;
        }
        .information a {
          color: #fff;
          text-decoration: none;
          font-size: 1.5vw;
        }

        .information address {
          color: #fff;
          font-style: normal;
          font-size: 1.5vw;
        }

        .information h4 {
          width: 20%;
        }

        ul {
          width: 35%;
          padding: 0;
          margin-bottom: 0.5em;
        }

        li {
          display: flex;
          justify-content: space-between;
          color: #fff;
          font-size: 1.5vw;
        }

        h3 {
          font-family: "Source Serif Pro", serif;
        }

        @media screen and (max-width: 1024px) {
          h1 {
            width: 100%;
          }

          ul {
            width: 50%;
          }
        }
        @media screen and (max-width: 1024px) and (orientation: portrait) {
          .main {
            height: 100%;
          }
          h1 {
            line-height: 1;
            margin-top: 10rem;
          }
          h4 {
            display: none;
          }
          li,
          span {
            font-size: 1rem;
          }
          .information address {
            font-size: 1rem;
          }
          ul {
            width: 70%;
          }
        }
        @media screen and (max-width: 768px) {
          h1 {
            line-height: 1;
            margin-top: 5rem;
          }

          .information div {
            width: 50%;
          }
        }
        @media screen and (max-width: 414px) {
          h1 {
            margin-top: 6rem;
            font-size: 16vw;
          }

          .information div {
            width: 100%;
            text-align: center;
          }
          div ul {
            width: 60%;
            margin: 1rem auto;
          }
          .information address,
          .information a,
          li {
            font-size: 5vw;
          }
          .information {
            margin-bottom: 10vh;
            margin-top: 5vh;
            width: 100%;
          }
        }
      `}</style>
    </div>
  </Section>
);
export default Hero;
