import { Grid } from "./Grid";
import Section from "./Section";
import { Parser } from "html-to-react";

const parser = new Parser();

const Forage = ({ page }) => {
  return (
    <Section id="brews">
      <Grid columns={14} width="90vw">
        <div className="brew-main-content">
          <h2>{page.title.rendered}</h2>
          <div className="brew-text">{parser.parse(page.content.rendered)}</div>
        </div>
        <div className="photos">
          <img className="gear" src="/gear.png" />
          <img className="main-img" src={page.acf.forage_images[0]} />
        </div>
        <hr />
        <div className="forage-text">
          <p>{page.acf.descriptive_text_left}</p>
          <p>{page.acf.descriptive_text_right}</p>
        </div>
        <ul className="beer-list">
          {page.acf.beer_list.map((beer) => (
            <li key={beer.beer_name}>{beer.beer_name}</li>
          ))}
        </ul>
        <h3>{page.acf.large_text}</h3>
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
              grid-row: 6 / 7;
              width: 90%;
              margin: 0 auto;
              padding-top: 5rem;
            }
            .forage-text p:last-child {
              padding-right: 0;
            }
            .beer-list {
              grid-row: 8 / 9;
              grid-column: 1 / 9;
              margin: 0 2rem 4rem;
            }
            h3 {
              font-size: 21vh;
              grid-column: 1 / 9;
              margin-left: 2rem;
              grid-row: 4;
              margin-top: 6rem;
            }
            hr {
              grid-column: 1 / 8;
              grid-row: 6;
              margin-left: 2rem;
              margin-top: 3rem;
            }
          }
          @media screen and (max-width: 414px) {
            .brew-main-content {
              margin-left: 1rem;
              grid-column-end: 6;
            }
            .brew-text {
              width: 92%;
            }
            .brew-main-content h2 {
              margin-top: 2rem;
            }
            .brew-main-content p {
              padding-right: 2rem;
            }
            .photos {
              grid-column: 3 / 6;
              margin-top: 0;
            }
            .main-img {
              margin-top: 0;
              height: 28vh;
            }
            .gear {
              height: 28vh;
              top: -10%;
            }
            h3 {
              grid-column-end: 6;
              grid-row: 4;
              margin-top: -1rem;
              margin-left: -1rem;
              font-size: 18vh;
            }
            hr {
              grid-column: 2 / 5;
              margin-left: -3rem;
              width: 130%;
              grid-row: 5;
              margin-top: 1rem;
            }
            .forage-text {
              grid-row: 5 / 6;
              grid-column-end: 6;
              margin: 2rem 0 0 1rem;
              width: 90%;
              flex-direction: column;
              padding-top: 0;
            }
            .forage-text p {
              padding-right: 0;
            }
            .beer-list {
              grid-row: 7 / 9;
              grid-column: 1 / 5;
              margin-top: 3rem;
              margin-left: 1rem;
              margin-bottom: 1rem;
              flex-direction: column;
            }
            li {
              width: 100%;
            }
          }
          @media screen and (max-width: 375px) {
            .photos {
              grid-column-start: 2;
              margin-top: 1rem;
            }
            .gear {
              top: -10%;
              left: 30%;
            }
            .beer-list {
              margin-top: 2rem;
              margin-bottom: 1rem;
            }
          }
          @media screen and (min-height: 812px) {
            .beer-list {
              margin-top: 0;
            }
          }
        `}</style>
      </Grid>
    </Section>
  );
};

export default Forage;
