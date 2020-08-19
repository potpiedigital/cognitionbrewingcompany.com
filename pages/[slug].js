import SingleStory from "../components/Single-story";

function fetchWordPress(route) {
  const wordPressApi =
    "https://cog-wordpress-6e69c4.ingress-bonde.easywp.com/wp-json/wp/v2";

  return fetch(`${wordPressApi}/${route}`).then((response) => response.json());
}

function fetchSlugs() {
  /**
   * just pull the slug 'field' out of each post, it's all we need
   * @see https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/#_fields
   */
  return fetchWordPress("posts?_fields=slug");
}

async function fetchPostBySlug(slug) {
  /**
   * got a clue from here:
   * @see https://github.com/WP-API/WP-API/issues/456#issuecomment-53876710
   *
   * ... but it looks like `?filter` got removed when the api became official:
   * @see https://developer.wordpress.org/rest-api/frequently-asked-questions/#what-happened-to-the-filter-query-parameter
   *
   * luckily we only need this `?slug=` argument
   *
   * ! NOTE: it is possible (I guess) for multiple posts in WordPress to have
   * ! the same slug, so this returns an array (though I think "common sense"
   * ! should tell us this will always be an array of length 1) ... we're just
   * ! picking the first element off this array (it _should be_ *the post*)
   */
  return (await fetchWordPress(`posts?slug=${slug}`))[0];
}

export async function getStaticPaths() {
  const slugs = await fetchSlugs();

  return {
    paths: slugs.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await fetchPostBySlug(slug);

  return {
    props: { post },
  };
}

const Story = ({ post }) => (
  <section>
    <div className="link-backs">
      <a className="back-to-stories" href="http://localhost:3000/stories">
        Back to Stories
      </a>
      <a className="back-link" href="http://localhost:3000/#blog">
        Back to Cognition
      </a>
    </div>
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
    <style jsx>{`
      .link-backs {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
      }
      a {
        text-decoration: none;
        font-size: 3vw;
      }
    `}</style>
  </section>
);

export default Story;
