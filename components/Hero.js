const Hero = () => (
  <div>
    <h1>Cognition Brewing Company</h1>
    <style jsx>{`
      div {
        background-image: url("https://source.unsplash.com/random");
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
        color: black;
      }
    `}</style>
  </div>
);
export default Hero;
