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
      </div>
      <div className="photos">
        <img className="gear" src="/gear.png" />
        <img className="main-img" src="/forage-1.png" />
      </div>
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
        }
        .photos {
          position: relative;
          grid-column: 11 / 13;
        }
        .main-img {
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
          left: 30%;
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
        @media screen and (max-width: 1024px) and (orientation: portrait) {
          .brew-main-content {
            grid-column: 2 / 6;
          }
          hr {
            margin-top: 5rem;
          }
          .forage-text {
            grid-column: 2 / 8;
            padding-top: 7rem;
          }
          .beer-list {
            grid-column-end: 9;
          }
          .photos {
            grid-column: 6 / 9;
          }
          .main-img {
            height: 24vh;
          }
          h3 {
            font-size: 24vh;
            grid-column: 1 / 9;
            margin-left: -2rem;
            grid-row: 6;
            margin-top: 6rem;
          }
        }
        @media screen and (max-width: 768px) {
          .brew-main-content {
            grid-column: 1 / 6;
            margin-left: 2rem;
          }
          .photos {
            grid-column: 4 /9;
            grid-row: 3 / 6;
            margin-top: 2rem;
          }
          .main-img {
            margin-top: 0;
            height: 32vh;
          }
          .gear {
            top: -50%;
            left: 50%;
          }
          .forage-text {
            grid-column: 1 / 9;
            grid-row: 7 / 8;
            width: 90%;
            margin: 0 auto;
            padding-top: 1rem;
          }
          .forage-text p:last-child {
            padding-right: 0;
          }
          .beer-list {
            grid-row: 8 / 9;
            grid-column: 1 / 9;
            margin: 2rem 2rem 1rem;
          }
          h3 {
            font-size: 21vh;
            grid-column: 1 / 9;
            margin-left: 2rem;
            grid-row: 5;
            margin-top: 0;
          }
          hr {
            grid-column: 1 / 8;
            grid-row: 7;
            margin-left: 2rem;
            margin-top: 0;
          }
        }
        @media screen and (max-width: 414px) {
          .brew-main-content {
            margin-left: 1rem;
            grid-column-end: 5;
          }
          .brew-main-content h2 {
            margin-top: 2rem;
          }
          .photos {
            grid-column: 3 / 6;
            margin-top: 0;
          }
          .gear {
            top: -25%;
          }
          h3 {
            grid-column-end: 6;
            grid-row: 4;
            margin-top: 1rem;
            margin-left: -1rem;
            font-size: 18vh;
          }
          hr {
            grid-column: 2 / 5;
            margin-left: -3rem;
            width: 130%;
            grid-row: 5;
            margin-top: 3rem;
          }
          .forage-text {
            grid-row: 5 / 6;
            grid-column-end: 6;
            margin: 4rem 0 0 1rem;
            width: 90%;
            flex-direction: column;
            padding-top: 0;
          }
          .beer-list {
            grid-row: 7 / 9;
            grid-column: 1 / 4;
            margin-top: 4rem;
            margin-left: 1rem;
            flex-direction: column;
          }
          li {
            width: 100%;
            font-size: 14px;
          }
        }
      `}</style>
    </Grid>
  </Section>
);

export default Forage;
