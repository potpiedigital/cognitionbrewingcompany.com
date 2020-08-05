import { Grid } from "./Grid";
import Section from "./Section";

const Colab = ({ page }) => (
  <Section id="colab">
    <Grid columns={14} width="90vw">
      <img className="teaser-beer" src="/beer-glass.png" />
      <div className="colab-info">
        <hr />
        <div className="colab-text">
          <p>{page.acf.descriptive_text_left}</p>
          <p>{page.acf.descriptive_text_right}</p>
        </div>
      </div>
      <img className="colab-img" src={page.acf.forage_images[0]} />
      <a href="mailto:kris@cognitionbrewing.com?subject=Mail from Our Site">
        Contact Us
      </a>
      <ul className="beer-list">
        {page.acf.beer_list.map((beer) => (
          <li key={beer.beer_name}>{beer.beer_name}</li>
        ))}
      </ul>
      <h3>{page.acf.large_text}</h3>
      <style jsx>{`
        .colab-info {
          grid-row: 2 / 5;
          grid-column: 2 / 8;
          position: relative;
        }
        .teaser-beer {
          grid-row: 1;
          grid-column: 1 / 3;
          margin-left: 7rem;
          margin-top: -16rem;
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
          .teaser-beer {
            margin-top: -18rem;
            margin-left: 5rem;
          }
          h3 {
            font-size: 23.5vh;
            margin-top: 2rem;
            grid-column: 2 / 17;
            grid-row-start: 7;
          }
          .beer-list {
            margin-top: 5rem;
          }
        }
        @media screen and (max-width: 1024px) and (orientation: portrait) {
          .colab-info {
            grid-row: 1 / 3;
            grid-column: 3 / 8;
            margin-top: 4rem;
          }
          .teaser-beer {
            margin-top: 0rem;
            margin-left: -15rem;
          }
          .beer-list {
            grid-row: 3;
            grid-column: 3 / 7;
          }
          .colab-img {
            grid-column: 6 / 9;
            grid-row: 4;
            width: 34vw;
          }
          a {
            grid-column: 2;
            grid-row: 5;
          }
          h3 {
            grid-column: 1 / 9;
            grid-row: 6 / 9;
            font-size: 21.5vh;
          }
        }
        @media screen and (max-width: 768px) {
          h3 {
            font-size: 21vw;
            grid-row: 2;
            grid-column: 1 / 9;
          }
          .colab-info {
            grid-row: 4;
            grid-column: 2 / 8;
            margin-top: 0;
          }
          .colab-img {
            grid-column: 6 / 8;
            grid-row: 1;
            width: 38vw;
          }
          .teaser-beer {
            grid-row: 8;
            margin-top: -5rem;
            margin-left: 0;
          }
          .beer-list {
            grid-column: 2 / 8;
            grid-row: 6;
          }
          a {
            grid-column: 7 / 8;
            grid-row: 7;
          }
        }
        @media screen and (max-width: 414px) {
          .teaser-beer {
            display: none;
          }

          .colab-img {
            grid-column: 2 / 6;
            width: 49vw;
            margin-left: 7rem;
            z-index: 2;
          }
          .colab-info {
            grid-column: 1 / 5;
            grid-row: 3 / 6;
            margin-top: 4rem;
            padding-left: 1rem;
          }
          a {
            grid-column: 3;
            grid-row: 7;
            margin-top: 6rem;
          }
          h3 {
            grid-column: 1 / 6;
            font-size: 26vw;
            margin-top: 3rem;
          }
          .beer-list {
            grid-row: 6 / 8;
            grid-column: 1 / 6;
            margin-top: 0;
            margin-left: 1rem;
            flex-direction: column;
          }
        }
        @media screen and (max-width: 375px) {
          h3 {
            margin-top: 1rem;
          }
          hr {
            margin-top: 0;
          }
          .colab-img {
            margin-top: 1rem;
          }
          .beer-list {
            grid-row: 5 / 8;
            margin-top: 6rem;
            margin-bottom: 5rem;
          }
        }
      `}</style>
    </Grid>
  </Section>
);

export default Colab;
