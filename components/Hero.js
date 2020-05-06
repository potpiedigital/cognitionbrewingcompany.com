const Hero = () => (
  <div className="main">
    <h1>Cognition Brewing Company</h1>
    <div className="information">
      <div>
        <ul>
          <li>
            Mon - Thur <span>4pm - 10pm</span>
          </li>
          <li>
            Fri and Sat <span>12pm - 12am</span>
          </li>
          <li>
            Sun <span>12pm - 10pm</span>
          </li>
        </ul>
        <address>113 E Canada St. Ishperming, MI</address>
        <a href="tel:906-204-2724"> (906) 204-2724</a>
      </div>
      <h4>SCROLL SIDEWAYS TO NAVIGATE</h4>
    </div>
    <style jsx>{`
      .main {
        background-image: url("/Cognition-Brewing-hero.png");
        box-shadow: inset 0 0 0 50vw rgba(0, 0, 0, 0.3);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 100vh;
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
    `}</style>
  </div>
);
export default Hero;
