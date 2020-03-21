const TapList = () => {
  return (
    <div className="main">
      <div className="intro">
      <h2>Tap List section</h2>
      <p>To truly experience our Cognition Brewing Company offerings, come and see us and enjoy a pint right were it was created. Share a memory of the “old” tap room. Please support our local downtown restaurants and share a pizza like you won’t find anywhere else.</p>
      </div>
      <div className="on-tap">
      <h3>On Tap Now</h3>
      <div className="listing">
        <div>
          <h4>Beer title 1</h4>
          <p>beer description</p>
          <p>beer numbers</p>
          <p>beer rating</p>
        </div>
        <div>
          <h4>Beer title 2</h4>
          <p>beer description</p>
          <p>beer numbers</p>
          <p>beer rating</p>
        </div>
        <div>
          <h4>Beer title 3</h4>
          <p>beer description</p>
          <p>beer numbers</p>
          <p>beer rating</p>
        </div>
        <div>
          <h4>Beer title 4</h4>
          <p>beer description</p>
          <p>beer numbers</p>
          <p>beer rating</p>
        </div>
      </div>
      </div>
      <div className="barrel">
      <h3>Barrel Offerings</h3>
      <p>these beers are limited and not available in Growlers</p>
      <div className="listing">
        <div>
          <h4>Beer title</h4>
          <p>beer description</p>
          <p>beer numbers</p>
          <p>beer rating</p>
        </div>
        <div>
          <h4>Beer title</h4>
          <p>beer description</p>
          <p>beer numbers</p>
          <p>beer rating</p>
        </div>
      </div>
      </div>
      <style jsx>{`
      .main {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(24, 1fr);
        grid-template-rows: 1fr 2fr 2fr;
        min-height: 0;
        min-width: 0;
        grid-gap: 1em;
        background-color: #ededed;
      }

      h3 {
        margin: 0;
      }

      .intro {
        margin: 0;
        grid-column: 2 / 7;
        grid-row-start: 1;
      }

      .on-tap {
        grid-column: 2 / 12;
        grid-row-start: 2;
      }

      .listing {
        display: flex;
        flex-wrap: wrap;
      }

      .on-tap div, .barrel div {
        height: auto;
        width: auto;
        padding: 1em 1em 0 0;
      }

      .on-tap div h4, p, .barrel div h4, p {
        margin: 0;
      }

      .barrel {
        grid-column: 2 / 12;
        grid-row-start: 3;
      }
      `}</style>
    </div>
  );
};

export default TapList;
