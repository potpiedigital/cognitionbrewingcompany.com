import { Parser } from "html-to-react";
import Link from "next/link";

const parser = new Parser();

const SingleStory = ({ date, image, title, text, slug, rows = 6 }) => (
  <div className="story-container">
    <div className="image-container">
      <img src={image} />
    </div>
    <div className="text-container">
      <span>{date}</span>
      <h4>{title}</h4>
      <div className="blogtext">{parser.parse(text)}</div>
      {slug && (
        <Link href="/[slug]" as={slug}>
          <a>read more</a>
        </Link>
      )}
    </div>
    <style jsx>{`
      .story-container {
        width: 100%;
        margin-bottom: 2rem;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(${rows}, minmax(0, 1fr));
        min-height: 0;
        min-width: 0;
        grid-gap: 1em;
      }
      .image-container {
        object-fit: cover;
        overflow: hidden;
        grid-column: 1 / 6;
        grid-row: 1 / 2;
      }
      img {
        height: 100%;
        width: 100%;
      }
      .text-container {
        grid-column: 6 / 13;
        grid-row: 1 / 4;
      }
      .blogtext {
        margin-top: 3rem;
      }
      h4 {
        font-size: 1.5vw;
        margin: 2rem 0;
      }
      span {
        color: #a73a3a;
      }
      @media screen and (max-width: 768px) {
        .image-container {
          grid-column: 1 / 13;
          grid-row: 1 / 2;
        }
        .text-container {
          grid-column: 1 / 12;
          grid-row: 5 / 6;
          margin-top: -4rem;
          margin-bottom: 5rem;
        }
        h4 {
          font-size: 5vw;
          margin-bottom: 0;
        }
        .blogtext {
          margin-top: 1rem;
        }
      }
      @media screen and (max-width: 414px) {
        .story-container {
          grid-template-columns: repeat(5, 1fr);
          /* grid-template-rows: repeat(5, 1fr); */
        }
        .image-container {
          grid-column: 1 / 6;
        }

        .text-container {
          grid-row: 2 / 6;
          margin-top: 1rem;
        }
        h4 {
          margin-top: 0;
        }

        /* img {
          grid-column: 1 / 6;
          grid-row: 1 / 4;
        }
        h4,
        span,
        .blogtext {
          grid-column: 1 / 6;
          grid-row: 4 / 6;
        } */
      }
      @media screen and (min-height: 812px) {
        .story-container {
          grid-template-rows: repeat(1, minmax(0, 1fr));
        }
      }
    `}</style>
  </div>
);

export default SingleStory;
