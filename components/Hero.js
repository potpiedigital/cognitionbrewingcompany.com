const Hero = () => (
  <div className="main">
    <h1>Cognition Brewing Company</h1>
    <div className="information">
      <div className="contact-info">
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
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 0 100%;
      }
      h1 {
        color: #fff;
        font-size: 160px;
        text-align: center;
        line-height: 160px;
        width: 50%;
        margin-top: 0;
      }

      .information {
        display: flex;
      }

      ul {
        width: 40%;
        padding: 0;
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
