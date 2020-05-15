import { Grid } from "./Grid";
import Section from "./Section";

const Colab = () => (
  <Section>
    <Grid columns={14} width="90vw">
      <div className="colab-info">
        <img className="teaser-beer" src="/beer-glass.png" />
        <hr />
        <div className="colab-text">
          <p>
            To truly experience our Cognition Brewing Company offerings, come
            and see us and enjoy a pint right were it was created. Share a
            memory of the “old” tap room. Please support our local downtown
            restaurants and share a pizza like you won’t find anywhere else.
          </p>
          <p>
            To truly experience our Cognition Brewing Company offerings, come
            and see us and enjoy a pint right were it was created. Share a
            memory of the “old” tap room. Please support our local downtown
            restaurants and share a pizza like you won’t find anywhere else.
          </p>
        </div>
      </div>
      <img className="colab-img" src="/colab-1.jpg" />
      <a href="cognitionbrewery.com">Contact Us</a>
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
      <h3>Collaboration</h3>
      <style jsx>{`
        .colab-info {
          grid-row: 2 / 5;
          grid-column: 2 / 8;
          position: relative;
        }

        .teaser-beer {
          position: absolute;
          left: 13%;
          top: -110%;
        }
        hr {
          border: 5px solid #a73a3a;
          width: 100%;
          height: 0;
          margin-top: 3rem;
        }
        .colab-text {
          margin-top: 2rem;
        }
        .beer-list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          list-style: none;
          grid-row: 4 / 6;
          grid-column: 2 / 10;
          padding: 0;
          margin-top: 2rem;
        }
        li {
          width: 50%;
          color: #a73a3a;
        }
        .colab-img {
          grid-column: 11 / 17;
          transform: rotate(15deg);
          box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
          width: 24vw;
          height: auto;
        }
        a {
          text-decoration: none;
          font-size: 1rem;
          color: #ffff;
          grid-column-start: 13;
          grid-row: 5 / 7;
          background-color: #a73a3a;
          border: none;
          border-radius: 50%;
          padding: 3rem;
          margin: auto;
          text-align: center;
          box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
        }
        a:hover {
          box-shadow: none;
        }
        h3 {
          font-size: 28vh;
          line-height: 0.8;
          word-wrap: break-word;
          white-space: pre-wrap;
          word-break: break-all;
          color: #a73a3a;
          grid-column: 2 / 12;
          grid-row-start: 5;
          margin-top: 7rem;
          z-index: 1;
          hyphens: auto;
        }
        @media screen and (max-width: 1440px) {
          .teaser-beer {
            top: -140%;
            left: 7%;
          }
          .colab-info {
            grid-column-end: 9;
          }
          .beer-list {
            grid-row-start: 5;
            grid-column-end: 12;
          }
          h3 {
            grid-row-start: 6;
          }
        }
        @media screen and (max-width: 1280px) {
          h3 {
            font-size: 23.5vh;
            margin-top: 2rem;
            grid-column: 2 / 17;
            grid-row-start: 7;
          }
          .beer-list {
            grid-row-start: 5;
          }
          .teaser-beer {
            left: 0;
            top: -160%;
          }
          .colab-info {
            grid-column-end: 9;
          }
        }
      `}</style>
    </Grid>
  </Section>
);

export default Colab;
