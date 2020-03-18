const Hero = () => (
  <div className="main">
    <h1>Cognition Brewing Company</h1>
    <div className="actions">
    <ul>
      <li>Mon - Thur</li>
      <li>Fri and Sat</li>
      <li>Sun</li>
    </ul>
    <ul>
      <li>4pm - 10pm</li>
      <li>12pm - 12am</li>
      <li>12pm - 10pm</li>
    </ul>
    <address>113 E Canada St. Ishperming, MI</address>
    <a href="tel:906-204-2724"> (906) 204-2724</a>
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
    `}</style>
  </div>
);
export default Hero;
