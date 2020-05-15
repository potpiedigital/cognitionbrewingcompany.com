import { Grid } from "./Grid";
import Section from "./Section";

const Forage = () => (
  <Section id="brews">
    <Grid columns={14} width="90vw">
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
        <img className="gear" src="/gear.png" />
      </div>
      <img className="main-img" src="/forage-1.png" />
      <hr />
      <div className="forage-text">
        <p>
          To truly experience our Cognition Brewing Company offerings, come and
          see us and enjoy a pint right were it was created. Share a memory of
          the “old” tap room. Please support our local downtown restaurants and
          share a pizza like you won’t find anywhere else.
        </p>
        <p>
          To truly experience our Cognition Brewing Company offerings, come and
          see us and enjoy a pint right were it was created. Share a memory of
          the “old” tap room. Please support our local downtown restaurants and
          share a pizza like you won’t find anywhere else.
        </p>
      </div>
      <ul className="beer-list">
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
        .brew-main-content {
          grid-column: 2 / 9;
          grid-row: 1;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .main-img {
          grid-column: 10 / 15;
          grid-row: 1;
          width: auto;
          height: 32vh;
          margin-top: 4rem;
          transform: rotate(-15deg);
          box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
          z-index: 1;
        }
        .gear {
          position: absolute;
          width: auto;
          height: 35vh;
          left: 135%;
          top: -85%;
        }
        hr {
          grid-row: 4;
          grid-column: 2 / 7;
          border: 5px solid #a73a3a;
          width: 100%;
          height: 0;
          margin-top: 2rem;
        }
        .forage-text {
          display: flex;
          grid-row: 4 / 5;
          grid-column: 2 / 14;
          height: auto;
          padding-top: 3rem;
        }
        .forage-text p {
          padding-right: 2em;
        }
        .beer-list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          list-style: none;
          grid-row: 6 / 7;
          grid-column: 2 / 11;
          padding: 0;
        }
        li {
          width: 30%;
          color: #a73a3a;
        }
        h3 {
          font-size: 28vh;
          grid-column: 2 / 6;
          grid-row-start: 6;
          margin-top: 4rem;
          color: #a73a3a;
        }
      `}</style>
    </Grid>
  </Section>
);

export default Forage;
