import { Grid } from "./Grid";

const Blog = () => (
  <Grid width="90vw">
    <img src="https://source.unsplash.com/random" />
    <h2>Cog Blog</h2>
    <div className="date-title">
      <span>October 23rd, 2019</span>
      <h4>Hell Town Whale Slayers</h4>
    </div>
    <hr />
    <p className="event-copy">
      Cognition Brewing Company is the newest addition to the growing craft beer
      scene here in Michigan’s Upper Peninsula. We are located right in the
      heart of the U.P. where the winters are long but enjoyed. We are proud to
      be located in an area that has such strong appreciation for community. To
      truly experience our Cognition Brewing Company offerings, come and see us
      and enjoy a pint right were it was created. Share a memory of the “old”
      tap room. Please support our local downtown restaurants and share a pizza
      like you won’t find anywhere else.{" "}
      <a href="www.facebook.com">read more</a>
    </p>
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
        padding-top: 0;
        padding: 2rem 2rem 0 0;
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
          padding-left: 2rem;
        }
        .date-title {
          grid-column: 1 / 8;
          grid-row: 5;
          padding-left: 2rem;
        }
        hr {
          grid-column: 1 / 6;
          grid-row: 6;
          margin-top: 4rem;
          margin-left: 2rem;
        }
        .event-copy {
          grid-column: 1 / 9;
          grid-row: 6 / 9;
          padding-top: 6rem;
          padding-left: 2rem;
        }
        .more-info {
          grid-column-end: 9;
        }
      }
    `}</style>
  </Grid>
);

export default Blog;
