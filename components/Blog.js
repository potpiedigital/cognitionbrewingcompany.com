const Blog = () => {
  return (
    <div className="blog-main">
      <img src="https://source.unsplash.com/random/500x1100" />
      <div className="post-details">
        <h2>Cog Blog</h2>
        <div className="date-title">
          <span>October 23rd, 2019</span>
          <h4>Hell Town Whale Slayers</h4>
        </div>
        <hr />
        <p className="event-copy">
          Cognition Brewing Company is the newest addition to the growing craft
          beer scene here in Michigan’s Upper Peninsula. We are located right in
          the heart of the U.P. where the winters are long but enjoyed. We are
          proud to be located in an area that has such strong appreciation for
          community. To truly experience our Cognition Brewing Company
          offerings, come and see us and enjoy a pint right were it was created.
          Share a memory of the “old” tap room. Please support our local
          downtown restaurants and share a pizza like you won’t find anywhere
          else. <a href="www.facebook.com">read more</a>
        </p>
        <p className="next-block">
          right
          <br /> Cog Brews
        </p>
        <a className="more-posts" href="www.facebook.com">More Stories</a>
      </div>
      <style jsx>{`
        .blog-main {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-gap: 1em;
        }
        img {
          grid-column: 1 / 4;
        }
        .post-details {
          grid-column: 6 / 13;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: 0.25fr 0.5fr 1fr 0.5fr;
          grid-gap: 1em;
        }
        span {
          color: #a73a3a;
        }
        h2 {
          grid-column: 1 / 4;
        }
        .date-title {
          grid-column: 1 / 7;
          grid-row-start: 2;
        }
        hr {
          border: 5px solid #a73a3a;
          grid-column: 1 / 3;
          grid-row: 3;
          width: 240px;
          height: 0;
        }
        h4 {
          font-size: 10.1vh;
          line-height: 97px;
          margin: 0;
        }
        .event-copy {
          grid-column: 4 / 7;
          grid-row-start: 3;
          padding-top: 6em;
          padding-right: 2em;
          margin: 0;
        }
        .next-block {
          grid-column: 6;
          grid-row-start: 4;
          text-align: right;
          padding-right: 2em;
        }
        .more-posts {
          grid-column: 1 / 3;
          grid-row-start: 4;
          text-decoration: none;
          color: #a73a3a;
          font-size: 2em;
        }
      `}</style>
    </div>
  );
};

export default Blog;
