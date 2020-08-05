import SingleStory from "../components/Single-story";

function getWordPress() {
  const wordPressApi =
    "https://cog-wordpress-6e69c4.ingress-bonde.easywp.com/wp-json/wp/v2";

  return fetch(`${wordPressApi}/posts`).then((postsResponse) =>
    postsResponse.json()
  );
}

export async function getStaticProps() {
  const posts = await getWordPress();
  return {
    props: { posts },
  };
}

const Stories = ({ posts }) => (
  <>
    {/* <Nav rotate={false} /> */}
    <section>
      <a className="back-link" href="http://localhost:3000/#blog">
        Back to Cog
      </a>
      <h2>More Stories</h2>
      {posts.map((post) => (
        <SingleStory
          key={post.id}
          image={post.acf.post_image}
          date={new Date(post.date).toLocaleString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          title={post.title.rendered}
          text={post.content.rendered}
        />
      ))}
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Source Serif Pro", serif;
          font-size: 1.125rem;
        }
        section {
          width: 90vw;
          margin: 1em auto;
        }
        h2 {
          color: black;
          font-size: 7.8vh;
          margin-bottom: 0;
          font-family: "Libre Franklin";
        }
      `}</style>
    </section>
  </>
);

export default Stories;
