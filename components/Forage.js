import { Grid } from "./Grid";
import Section from "./Section";
import { Parser } from "html-to-react";

const fullStyle = {
  width: "100vw",
  overflow: "visible",
};

const parser = new Parser();

const Forage = ({ page }) => {
  return (
    <Section style={fullStyle} id="brews">
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
        <div className="big-text-container">
          <h3>{page.acf.large_text}</h3>
        </div>
        <style jsx>{`
          .big-text-container {
            grid-column: 2 / 14;
            grid-row: 6 / 9;
            overflow: hidden;
            z-index: 1;
          }
          .brew-main-content {
            grid-column: 2 / 9;
            grid-row: 1;
            display: flex;
            flex-direction: column;
          }
          .photos {
            position: relative;
            grid-column: 11 / 15;
            grid-row: 1 / 5;
          }
          .main-img {
            width: 24vw;
            height: 32vh;
            object-fit: cover;
            display: block;
            overflow: visible;
            transform: rotate(15deg);
            box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
            position: absolute;
            top: 10%;
            right: 0;
          }
          .gear {
            position: absolute;
            width: auto;
            height: 35vh;
            left: 30%;
            top: -10%;
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
              width: 32vw;
            }
            .gear {
              left: -40%;
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
              grid-column: 2 /7;
              grid-row: 3 / 6;
              margin-top: 2rem;
              z-index: 2;
            }
            .main-img {
              margin-top: 0;
              height: 32vh;
              width: 43vw;
            }
            .gear {
              top: -10%;
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
            .big-text-container {
              grid-column: 1 / 9;
              grid-row: 4 / 7;
            }
            h3 {
              font-size: 21vh;
              margin-left: 2rem;
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
              grid-column-end: 5;
            }
            .brew-text {
              width: 100%;
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
              overflow: hidden;
            }
            .main-img {
              margin-top: 0;
              height: 28vh;
              left: 10%;
            }
            .gear {
              height: 28vh;
              top: 0%;
              left: 0%;
            }
            .big-text-container {
              grid-column-end: 6;
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
              top: 0%;
              left: 30%;
            }
            .beer-list {
              margin-top: 2rem;
              margin-bottom: 1rem;
            }
          }
          @media screen and (max-width: 320px) {
            h3 {
              display: none;
            }
            .photos {
              margin-top: 5rem;
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
