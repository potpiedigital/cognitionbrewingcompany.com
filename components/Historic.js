import { Grid } from "./Grid";
import Section from "./Section";

const fullStyle = {
  width: "100vw",
  overflow: "visible",
};

const Historic = ({ page }) => (
  <Section style={fullStyle} id="historic">
    <Grid backgroundColor="#a73a3a" columns={14}>
      <hr />
      <div className="historic-text">
        <p>{page.acf.descriptive_text_left}</p>
        <p>{page.acf.descriptive_text_right}</p>
      </div>
      <ul className="beer-list">
        {page.acf.beer_list.map((beer) => (
          <li key={beer.beer_name}>{beer.beer_name}</li>
        ))}
      </ul>
      <div className="historic-imgs">
        <img className="history-img-1" src={page.acf.forage_images[0]} />
        <img className="history-img-2" src={page.acf.forage_images[1]} />
        <img className="history-img-3" src={page.acf.forage_images[2]} />
      </div>
      <div className="big-text-container">
        <h3>{page.acf.large_text}</h3>
      </div>
      <style jsx>{`
        hr {
          grid-row: 1;
          grid-column: 2 / 7;
          border: 5px solid #fff;
          width: 100%;
          height: 0;
          margin-top: 3rem;
        }
        .historic-text {
          color: #fff;
          grid-row: 1;
          grid-column: 2 / 8;
          margin-top: 4rem;
        }
        .beer-list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          list-style: none;
          grid-row-start: 4;
          grid-column: 2 / 10;
          padding: 0;
        }
        li {
          width: 50%;
          color: #000000;
        }
        .historic-imgs {
          grid-column: 10 / 15;
          grid-row: 1 / 6;
          position: relative;
        }
        .history-img-1 {
          width: 24vw;
          height: auto;
          transform: rotate(15deg);
          box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
          position: absolute;
          top: 0;
          right: 0;
        }
        .history-img-2 {
          width: 26vw;
          height: auto;
          transform: rotate(-15deg);
          box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
          position: absolute;
          bottom: -10%;
          left: -10%;
        }
        .history-img-3 {
          width: 13vw;
          height: auto;
          box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
          position: absolute;
          bottom: -25%;
          right: -10%;
        }
        .big-text-container {
          grid-column: 2 / 12;
          grid-row: 7 / 9;
          overflow: hidden;
          z-index: 1;
        }
        h3 {
          font-size: 28vh;
          margin-top: 0;
          margin-bottom: 0;
          /* line-height: 1; */
        }

        @media screen and (max-width: 1440px) {
          .beer-list {
            grid-row-start: 5;
          }
        }
        @media screen and (max-width: 1024px) and (orientation: portrait) {
          .historic-imgs {
            grid-column: 1 / 9;
            grid-row: 3 / 5;
          }
          .history-img-1 {
            top: -21%;
            right: 35%;
          }
          .history-img-2 {
            bottom: 20%;
            left: 8%;
            width: 30vw;
          }
          .history-img-3 {
            bottom: 0%;
            right: 10%;
            width: 25vw;
            transform: rotate(-15deg);
          }
          .beer-list {
            grid-column: 2 / 8;
          }
          .big-text-container {
            grid-column: 1 / 9;
            margin-left: 0;
            margin-top: 0;
          }
          h3 {
            font-size: 24vh;
          }
        }
        @media screen and (max-width: 768px) {
          .big-text-container {
            grid-column: 1 / 9;
            grid-row: 1 / 3;
            margin-left: 0;
            overflow: hidden;
          }
          h3 {
            font-size: 21vh;
          }
          hr,
          .historic-text {
            grid-row: 5;
          }
          .beer-list {
            grid-row: 7;
            margin-top: 2rem;
          }
          .historic-imgs {
            grid-column: 2 / 8;
            grid-row: 1 / 4;
          }
          .history-img-1 {
            width: 36vw;
            top: -5%;
            right: 5%;
          }
          .history-img-2 {
            width: 40vw;
            bottom: -30%;
            left: -5%;
          }
          .history-img-3 {
            width: 24vw;
            bottom: -40%;
            right: -5%;
            transform: rotate(15deg);
          }
        }
        @media screen and (max-width: 414px) {
          .big-text-container {
            grid-column-end: 6;
          }
          h3 {
            font-size: 16vh;
          }
          .historic-imgs {
            grid-column: 1 / 6;
            grid-row-end: 3;
          }
          .history-img-1 {
            width: 45vw;
            top: -5%;
            right: 10%;
          }
          .history-img-2 {
            width: 50vw;
            bottom: -55%;
            left: 5%;
          }
          .history-img-3 {
            width: 29vw;
            bottom: -45%;
            right: 5%;
          }
          hr {
            grid-row: 4;
            grid-column: 2 / 5;
            margin-left: -3rem;
            margin-top: 2rem;
            width: 130%;
            margin-top: 0;
          }
          .historic-text {
            grid-row: 4 / 5;
            grid-column: 1 / 6;
            margin-left: 0;
            margin-top: 1rem;
          }
          .historic-text p {
            padding: 0 1rem;
          }
          .beer-list {
            grid-row: 7 / 9;
            grid-column: 1 / 6;
            margin-top: -2rem;
            margin-left: 1rem;
            flex-direction: column;
          }
        }
        @media screen and (max-width: 375px) {
          .history-img-2 {
            width: 65vw;
          }

          .beer-list {
            margin-bottom: 2rem;
          }
        }
        @media screen and (min-height: 812px) {
          .history-img-1 {
            top: 35%;
          }
        }
      `}</style>
    </Grid>
  </Section>
);

export default Historic;
