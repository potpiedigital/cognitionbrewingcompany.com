import OnTap from "./On-tap";
import OnDeck from "./On-deck";
import { Grid } from "./Grid";
import Section from "./Section";
import { Parser } from "html-to-react";

const parser = new Parser();

const TapList = ({ items, onDeck, page }) => {
  return (
    <Section id={page.slug}>
      <Grid columns={24} width="125vw">
        <div className="intro">
          <h2>{page.title.rendered}</h2>
          <div className="intro-text">
            {parser.parse(page.content.rendered)}
          </div>
          <img src="/hops.svg" />
        </div>
        <OnTap items={items} />
        <OnDeck onDeck={onDeck} />
        <h3>Cognition</h3>
        <style jsx>{`
          .intro {
            margin: 0;
            grid-column: 2 / 9;
            grid-row: 1 / 3;
            position: relative;
          }
          .intro-text {
            margin-bottom: 0;
          }
          img {
            position: absolute;
            width: auto;
            height: 50vh;
            top: -120px;
            right: -350px;
          }
          h3 {
            font-size: 28vh;
            line-height: 1;
            color: #a73a3a;
            margin: -0.25em 0 0 0;
            grid-column: 18 / 25;
            grid-row: 2 / 8;
            word-wrap: break-word;
            white-space: pre-wrap;
            word-break: break-all;
            text-transform: uppercase;
          }
          @media screen and (max-width: 1370px) {
            img {
              height: 40vh;
              right: -300px;
            }
            h3 {
              font-size: 24vh;
              margin-top: 1rem;
              grid-row-start: 1;
            }
          }
          @media screen and (max-width: 1280px) {
            h3 {
              grid-column: 18 / 25;
              font-size: 28vh;
              margin-top: 4rem;
            }
            img {
              height: 50vh;
              right: -250px;
            }
          }
          @media screen and (max-width: 1024px) and (orientation: portrait) {
            .intro {
              grid-column: 2 /7;
              grid-row: 1 / 2;
            }
            img {
              top: 0px;
              right: -320px;
              height: 38vh;
            }
            h3 {
              grid-column: 1 / 9;
              font-size: 23vh;
              grid-row: 5 / 9;
              margin-left: 2rem;
            }
            img {
              display: none;
            }
          }
          @media screen and (max-width: 768px) {
            .intro {
              grid-column: 1 /5;
              margin-left: 2rem;
            }
            h3 {
              font-size: 28vh;
              margin-top: 0;
            }
          }
          @media screen and (max-width: 414px) {
            .intro {
              grid-column: 1/ 6;
              margin-left: 0;
            }
            h2 {
              margin-top: 2rem;
              padding-left: 1rem;
            }
            .intro-text {
              padding: 0 1rem;
              width: 95%;
              margin: 0 auto;
            }
            h3 {
              font-size: 24vh;
              grid-column-end: 6;
              grid-row-start: 8;
              margin: 0;
            }
          }
          @media screen and (max-width: 375px) {
            .intro-text {
              width: 90%;
            }
          }
          /* @media screen and (min-height: 812px) {
            h3 {
              font-size: 20vh;
            }
          } */
        `}</style>
      </Grid>
    </Section>
  );
};

export default TapList;
