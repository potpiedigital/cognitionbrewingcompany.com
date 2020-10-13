import { Grid } from "./Grid";
import Section from "./Section";
import { Parser } from "html-to-react";
import Link from "next/link";

const parser = new Parser();

const Blog = ({ post }) => (
  <Section id="blog">
    <Grid width="90vw">
      <img src={post.acf.post_image} />
      <h2>Cog Blog</h2>
      <div className="date-title">
        <span>
          {new Date(post.date).toLocaleString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <h4>{post.title.rendered}</h4>
      </div>
      <hr />
      <div className="event-copy">
        {parser.parse(post.excerpt.rendered)}
        <Link href="/[slug]" as={post.slug}>
          <a>read more</a>
        </Link>
      </div>
      <div className="more-info">
        <a className="more-posts" href="/stories">
          More Stories
        </a>
        <p className="next-block">right Cog Brews</p>
      </div>
      <style jsx>{`
        img {
          width: 26vw;
          height: 100vh;
          object-fit: cover;
          display: block;
          grid-column: 1 / 4;
        }
        h2 {
          grid-column: 6 / 13;
        }
        span {
          color: #a73a3a;
        }
        .date-title {
          grid-column: 6 / 13;
          grid-row-start: 3;
          margin-top: -1em;
        }
        hr {
          border: 5px solid #a73a3a;
          grid-column: 6 / 9;
          grid-row: 5;
          width: 240px;
          height: 0;
          margin-left: 0;
        }
        h4 {
          font-size: 6rem;
          line-height: 85px;
          margin: 0;
          color: #000000;
        }
        .event-copy {
          grid-column: 9 / 13;
          grid-row-start: 5;
          padding-top: 2rem;
          margin: 0;
        }
        .more-info {
          grid-column: 6 / 13;
          grid-row-start: 8;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .next-block {
          text-align: right;
          padding-right: 2em;
          word-wrap: break-word;
          width: 5vw;
        }
        .more-posts {
          text-decoration: none;
          color: #a73a3a;
          font-size: 2em;
          background-color: transparent;
          border: none;
        }
        .more-posts:before {
          content: "↓";
          color: #fff;
          border: 1px solid #a73a3a;
          border-radius: 100%;
          background-color: #a73a3a;
          padding: 0 0.75rem;
        }

        @media screen and (max-width: 1920px) {
          img {
            width: 36vw;
          }
        }
        @media screen and (max-width: 1280px) {
          h4 {
            font-size: 5rem;
          }
          .next-block {
            display: none;
          }
        }
        @media screen and (max-width: 1024px) {
          h4 {
            font-size: 4rem;
          }
          .event-copy {
            grid-column-start: 6;
          }
        }
        @media screen and (max-width: 1024px) and (orientation: portrait) {
          img {
            height: 65vh;
          }
          h2 {
            grid-column: 4 / 9;
            margin-left: 2rem;
            margin-top: 2rem;
          }
          .date-title {
            grid-column: 4 / 8;
            grid-row: 2;
            margin-top: 6rem;
            margin-left: 2rem;
          }
          hr {
            grid-column: 4 / 9;
            grid-row: 3;
            margin-top: 12rem;
            margin-left: 2rem;
          }
          .event-copy {
            grid-column: 4 / 8;
            grid-row: 5 / 7;
            padding-left: 2rem;
            padding-top: 0;
            margin-top: 2rem;
          }
          .more-info {
            grid-column: 7 / 9;
            grid-row: 8;
          }
        }
        @media screen and (max-width: 768px) {
          img {
            grid-column-end: 9;
            grid-row: 1 / 4;
            width: 100vw;
            height: 100%;
          }
          h2 {
            grid-column: 1 / 8;
            grid-row: 4;
            margin-top: 0;
          }
          .date-title {
            grid-column: 1 / 8;
            grid-row: 5;
            margin-top: 0;
          }
          hr {
            grid-column: 1 / 6;
            grid-row: 6;
            margin-top: 4rem;
            margin-left: 2rem;
          }
          .event-copy {
            grid-column: 1 / 8;
            grid-row: 6 / 9;
            padding-top: 6rem;
            padding-left: 2rem;
          }
          .more-info {
            grid-column: 6/9;
            grid-row: 8;
          }
        }
        @media screen and (max-width: 414px) {
          img {
            grid-column-end: 6;
          }
          .date-title {
            grid-column: 1 / 5;
            margin-left: 0;
            padding-left: 1rem;
          }
          h2 {
            grid-column-end: 6;
            margin-left: 1rem;
          }
          h4 {
            font-size: 2.75rem;
            line-height: 1;
          }
          hr {
            margin-top: 1rem;
            margin-left: 1rem;
          }
          .event-copy {
            margin-top: 3rem;
            grid-column: 1 / 5;
            padding: 0 1rem 0 1rem;
          }
          .more-info {
            grid-column: 2 / 5;
          }
          .more-posts {
            padding-left: 1rem;
            padding-top: 2rem;
          }
          .more-posts:before {
            display: none;
          }
        }
        @media screen and (max-width: 375px) {
          h4 {
            font-size: 2.5rem;
          }
          .more-posts {
            padding-left: 0;
          }
          h5 {
            grid-column-end: 7;
            grid-row-start: 7;
          }
        }
      `}</style>
    </Grid>
  </Section>
);

export default Blog;
