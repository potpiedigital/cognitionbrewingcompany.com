const Hero = () => (
  <div className="main">
    <h1>Cognition Brewing Company</h1>
    <div className="information">
      <div>
        <ul>
          <li>Mon - Thur <span>4pm - 10pm</span></li>
          <li>Fri and Sat <span>12pm - 12am</span></li>
          <li>Sun <span>12pm - 10pm</span></li>
        </ul>
        <address>113 E Canada St. Ishperming, MI</address>
        <a href="tel:906-204-2724"> (906) 204-2724</a>
    </div>
    <h3>SCROLL/DRAG</h3>
    </div>
    <style jsx>{`
      .main {
        background-image: url("/Cognition-Brewing-hero.png");
        box-shadow: inset 0 0 0 50vw rgba(0,0,0,0.3);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex: 1 0 100%;
      }

      h1 {
        color: #fff;
        font-size: 160px;
        text-align: center;
        line-height: 160px;
        width: 50%;
        margin-top: 0;
        margin-bottom: 0.5em;
      }

      .information {
        display: flex;
        align-items: center;
        height: auto;
        width: 80%;
      }

      .information a {
        color: #fff;
        text-decoration: none;
      }

      .information address {
        color: #fff;
        font-style: normal;
      }

      ul {
        width: 25%;
        padding: 0;
        margin-bottom: 0;
      }

      li {
        display:flex;
        justify-content: space-between;
        color: #fff;
      }
    `}</style>
  </div>
);
export default Hero;
