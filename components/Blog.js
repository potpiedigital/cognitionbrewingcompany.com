const Blog = () => {
  return (
    <div className="blog-main">
      <img src="https://source.unsplash.com/random" />
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
        <div className="more-info">
          <button className="more-posts" href="www.facebook.com">More Stories</button>
          <p className="next-block">
            right Cog Brews
          </p>
        </div>
      </div>
      <style jsx>{`
        .blog-main {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-gap: 1em;
        }
        img {
          width: 500px;
          height: 100vh;
          grid-column: 1 / 4;
        }
        .post-details {
          grid-column: 6 / 13;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: repeat(8, minmax(0, 1fr));
          min-height: 0;
          min-width: 0;
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
          grid-row-start: 3;
          margin-top: -1em;
        }
        hr {
          border: 5px solid #a73a3a;
          grid-column: 1 / 3;
          grid-row: 5;
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
          grid-row-start: 5;
          padding-top: 0;
          padding-right: 2em;
          margin: 0;
        }
        .more-info {
          grid-column: 1 / 7;
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
      `}</style>
    </div>
  );
};

export default Blog;
