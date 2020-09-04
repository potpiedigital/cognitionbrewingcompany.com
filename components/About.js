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

const About = ({ page }) => (
  <Section id={page.slug}>
    <Grid backgroundColor="#a73a3a" width="100vw">
      <img src="/Logo-1.svg" />
      <h3>{page.acf.tag_line}</h3>
      <div className="text-blocks">
        {parser.parseWithInstructions(
          page.content.rendered,
          () => true,
          processingInstructions
        )}
        <p>
          Right <br /> Tap List
        </p>
      </div>
      <hr />
      <h2>{page.title.rendered}</h2>
      <style jsx>{`
        img {
          margin-top: 2em;
          height: 250px;
          width: auto;
          grid-column: 2 / 5;
          grid-row-start: 1;
        }
        h3 {
          grid-column: 2 / 7;
          grid-row-start: 4;
          color: #ffffff;
        }
        .text-blocks {
          margin-top: 2em;
          grid-row: 1 / 6;
          grid-column-start: 8;
          grid-column-end: 12;
          display: flex;
          flex-direction: column;
        }
        hr {
          grid-column: 2 / 7;
          border: 2px solid #fff;
          grid-row-start: 6;
          width: 100%;
          margin-top: 4vh;
          height: 0;
        }

        h2 {
          font-size: 28vh;
          /* line-height: 0.5; */
          grid-column: 2 /6;
          grid-row: 6 / 9;
          overflow: hidden;
          margin: 0 auto;
          padding-top: 3rem;
        }

        @media screen and (max-width: 1280px) {
          h2 {
            font-size: 15vw;
            line-height: 1;
          }
          h3 {
            font-size: 4vw;
          }
          img {
            height: 33vh;
          }
        }
        @media screen and (max-width: 1024px) and (orientation: portrait) {
          img {
            grid-column: 1 / 4;
            height: 350px;
          }
          h2 {
            grid-column: 1 / 9;
            padding-top: 6rem;
            font-size: 26vw;
            margin-left: 1rem;
          }
          h3 {
            grid-column: 1 / 5;
            margin-left: 2rem;
            font-size: 5vw;
          }
          hr {
            grid-column: 1 / 6;
            margin-left: 2rem;
          }
          .text-blocks {
            grid-column: 5 / 9;
          }
          p:last-child {
            display: none;
          }
        }
        @media screen and (max-width: 768px) {
          img {
            height: 25vh;
          }
          h3 {
            grid-row: 5 / 6;
            grid-column-end: 4;
            margin-left: 1rem;
            font-size: 4vw;
            margin-top: 3rem;
          }
          .text-blocks {
            grid-column-start: 4;
          }
          hr {
            grid-row: 6 / 7;
            margin-top: 4rem;
          }
          h2 {
            grid-row: 7 / 9;
            grid-column: 1;
            padding-top: 0;
            font-size: 24vw;
          }
        }
        @media screen and (max-width: 414px) {
          img {
            grid-column: 2 / 4;
            margin-top: 1rem;
            height: 30vh;
          }
          h3 {
            display: none;
          }
          hr {
            grid-row: 3;
            grid-column-end: 5;
            margin-top: 0;
          }
          h2 {
            grid-row: 3;
            grid-column: 1 / 6;
            margin-top: 1rem;
            overflow: visible;
            font-size: 30vw;
          }
          .text-blocks {
            grid-column: 1 / 6;
            grid-row-start: 4;
            margin-top: 1rem;
          }
        }
        @media screen and (max-height: 812px) {
          img {
            grid-column-start: 1;
            margin-left: 3rem;
          }
        }
      `}</style>
    </Grid>
  </Section>
);

export default About;
