// import SingleStory from "../components/Single-story";
import NavStories from "../components/Nav-stories";
import { Parser } from "html-to-react";

const parser = new Parser();

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
    <NavStories />
    {/* <SingleStory
      key={post.id}
      image={post.acf.post_image}
      date={new Date(post.date).toLocaleString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
      title={post.title.rendered}
      text={post.content.rendered}
    /> */}
    <div className="blog-content">
      <img src={post.acf.post_image} />
      <span>
        {new Date(post.date).toLocaleString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
      <h2>{post.title.rendered}</h2>
      <div className="post-text">{parser.parse(post.content.rendered)}</div>
    </div>
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
      .link-backs {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
      }
      .blog-content {
        width: 60vw;
        margin: 4rem auto 0;
      }
      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        display: block;
        overflow: visible;
        padding-bottom: 2rem;
      }
      h2 {
        margin-top: 0;
      }
      span {
        color: #a73a3a;
      }

      @media screen and (max-width: 414px) {
        section {
          width: 100vw;
        }
      }
    `}</style>
  </section>
);

export default Story;
