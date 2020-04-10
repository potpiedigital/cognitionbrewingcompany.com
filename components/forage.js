const Forage = () => (
  <div className="forage-main">
    <div className="brew-main-content">
      <h2>Cog Brews</h2>
      <p className="brew-text">
        At Cognition Brewing Company we plan to have many different styles of
        beer available and there will always be something new on tap to enjoy.
        We will have a number of regularly rotating beers as well as some
        seasonal releases. We will also have some very limited release beers
        that will be featured very briefly in the pub and mostly at beer
        festivals.
      </p>
    </div>
    <hr />
    <div className="forage-text">
      <p>
        To truly experience our Cognition Brewing Company offerings, come and
        see us and enjoy a pint right were it was created. Share a memory of the
        “old” tap room. Please support our local downtown restaurants and share
        a pizza like you won’t find anywhere else.
      </p>
      <p>
        To truly experience our Cognition Brewing Company offerings, come and
        see us and enjoy a pint right were it was created. Share a memory of the
        “old” tap room. Please support our local downtown restaurants and share
        a pizza like you won’t find anywhere else.
      </p>
    </div>
    <ul className="forage-list">
      <li>The Unicorn in Captivity</li>
      <li>Faded Reality</li>
      <li>Rett Farm</li>
      <li>Storm the castle</li>
      <li>Kamadhenu’s Milk</li>
      <li>Nowhere / Catastrophe</li>
      <li>The Unicorn in Captivity</li>
      <li>Storm the castle</li>
      <li>Kamadhenu’s Milk</li>
    </ul>
    <h3>Forage</h3>
    <style jsx>{`
      .forage-main {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(24, 1fr);
        grid-template-rows: repeat(8, minmax(0, 1fr));
        min-height: 0;
        min-width: 0;
        grid-gap: 1em;
        /* overflow: hidden; */
      }
      .brew-main-content {
        grid-column: 2 / 7;
        grid-row: 1;
        display: flex;
        flex-direction: column;
      }
      div {
        grid-row: 4 / 9;
        grid-column: 2 / 12;
      }
      hr {
        grid-row: 4;
        grid-column: 2 / 5;
        border: 5px solid #a73a3a;
        width: 240px;
        height: 0;
      }
      .forage-text {
        display: flex;
        grid-row: 4 / 5;
        grid-column: 2 / 13;
        height: auto;
        padding-top: 1em;
      }
      .forage-text p {
        padding-right: 2em;
      }
      .forage-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style: none;
        grid-row: 5 / 7;
        grid-column: 2 / 12;
        padding: 0;
      }
      li {
        width: 21em;
        color: #a73a3a;
      }
      h3 {
        font-size: 28vh;
        grid-column: 2 / 6;
        grid-row-start: 6;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

export default Forage;
