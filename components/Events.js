import { Grid } from "./Grid";
import Section from "./Section";
import HtmlToReact, { Parser } from "html-to-react";
import WhiteParagraph from "./White-paragraph";

const parser = new Parser();
const nodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

const processingInstructions = [
  {
    shouldProcessNode: (node) => node.type === "tag" && node.name === "p",
    processNode: (node, children, index) =>
      React.createElement(WhiteParagraph, { key: index }, children),
  },
  {
    shouldProcessNode: () => true,
    processNode: nodeDefinitions.processDefaultNode,
  },
];

const fullStyle = {
  width: "100vw",
  overflow: "visible",
};

const Events = ({ page }) => (
  <Section style={fullStyle} id="events">
    <Grid backgroundColor="#a73a3a">
      <h2>{page.title.rendered}</h2>
      <div className="event">
        <h3>{page.acf.event_title}</h3>
        {parser.parseWithInstructions(
          page.acf.event_description,
          () => true,
          processingInstructions
        )}
      </div>
      <h5>Cog Events</h5>
      <div className="event-img">
        <img src={page.acf.event_image} />
      </div>
      <style jsx>{`
        h2 {
          grid-column: 2 / 8;
          grid-row-start: 1;
          font-size: 60px;
          color: #fff;
        }
        h3 {
          font-size: 48px;
          margin: 0;
        }
        h5 {
          grid-column: 2 / 12;
          grid-row: 6 / 9;
          overflow: hidden;
          font-size: 23vh;
          line-height: 1;
          text-transform: uppercase;
          color: #973434;
        }
        .event {
          grid-column: 2 / 11;
          grid-row: 3 / 9;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          z-index: 1;
          color: #fff;
          position: relative;
        }
        a,
        p {
          color: #fff;
          z-index: 1;
        }
        .event-img {
          grid-row-start: 3;
          grid-column-start: 12;
          position: relative;
          width: 30vw;
          height: 50vh;
        }
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          transform: rotate(15deg);
          box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
          position: absolute;
        }
        @media screen and (max-width: 1370px) {
          h5 {
            grid-column-end: 13;
          }
        }
        @media screen and (max-width: 1280px) {
          h5 {
            grid-column-end: 12;
          }
        }
        @media screen and (max-width: 1040px) {
          h2 {
            grid-column-end: 13;
          }
          .event {
            grid-row: 2 / 8;
            margin-top: 2rem;
          }
        }
        @media screen and (orientation: portrait) {
          h2 {
            grid-column-end: 9;
          }

          .event-img {
            grid-row: 2 / 4;
            grid-column: 3 / 6;
            width: 50vw;
            height: 30vh;
            margin-top: 2rem;
          }
          img {
            transform: rotate(-20deg);
          }
          .event {
            margin-top: 12rem;
            grid-row-start: 4;
            grid-column: 2 / 8;
            overflow: visible;
          }
          h5 {
            grid-column: 1 / 9;
          }
        }
        @media screen and (max-width: 414px) {
          h2 {
            grid-column: 1 / 6;
            padding-left: 1rem;
          }
          .event {
            grid-column: 1 / 6;
          }
          .event-img {
            margin-top: 4rem;
            grid-column: 2 / 5;
            width: 60vw;
            height: 35vh;
          }
          h3,
          p,
          a {
            padding-left: 1rem;
          }
          .event {
            margin-top: 6rem;
          }
          h5 {
            grid-column-end: 6;
          }
        }
        @media screen and (max-width: 375px) {
          h2,
          h5 {
            grid-column-end: 7;
          }
          .event,
          .event-img {
            margin-top: 2rem;
          }
          .event-img {
            width: 65vw;
            height: 30vh;
          }
        }
      `}</style>
    </Grid>
  </Section>
);

export default Events;
