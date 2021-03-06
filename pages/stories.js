import SingleStory from "../components/Single-story";
import NavStories from "../components/Nav-stories";

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
    <section>
      <NavStories />
      <h2>More Stories</h2>
      {posts.map((post) => (
        <SingleStory
          rows="1"
          key={post.id}
          image={post.acf.post_image}
          date={new Date(post.date).toLocaleString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          title={post.title.rendered}
          text={post.excerpt.rendered}
          slug={post.slug}
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
          text-align: center;
          padding-bottom: 2rem;
        }
        .back-link {
          background-color: #a73a3a;
          padding: 1rem;
          color: #fff;
          text-decoration: none;
        }
        @media screen and (min-height: 812px) {
          h2 {
            font-size: 6vh;
          }
        }
        @media screen and (max-width: 414px) {
          section {
            width: 100vw;
          }
        }
      `}</style>
    </section>
  </>
);

export default Stories;
