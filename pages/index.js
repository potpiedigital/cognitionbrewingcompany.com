import CarouselContainer from "../components/Carousel";
import Head from "next/head";
import React from "react";
import { btoa } from "abab";

function getUntappd() {
  const untappdApi = "https://business.untappd.com/api/v1";
  const auth = btoa(`${process.env.UNTAPPD_USER}:${process.env.UNTAPPD_TOKEN}`);
  const opts = { headers: { Authorization: `Basic ${auth}` } };

  return Promise.all([
    fetch(`${untappdApi}/sections/90568/items`, opts),
    fetch(`${untappdApi}/sections/90575/items`, opts),
    fetch(`${untappdApi}/sections/90567/items`, opts),
  ])
    .then(([a, b, c]) => Promise.all([a.json(), b.json(), c.json()]))
    .then(([a, b, c]) => [[...a.items, ...b.items], c.items]);
}

function getWordPress() {
  const wordPressApi =
    "https://cog-wordpress-6e69c4.ingress-bonde.easywp.com/wp-json/wp/v2";

  return Promise.all([
    fetch(`${wordPressApi}/pages`),
    fetch(`${wordPressApi}/posts`),
  ])
    .then(([pagesResponse, postsResponse]) =>
      Promise.all([pagesResponse.json(), postsResponse.json()])
    )
    .then(([pagesJson, postsJson]) => [pagesJson, postsJson]);
}

export async function getStaticProps() {
  const [items, onDeck] = await getUntappd();
  const [pages, posts] = await getWordPress();
  return {
    props: { items, onDeck, pages, posts },
  };
}

const MainPage = ({ items, onDeck, pages, posts }) => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Libre+Franklin:400,600,700|Source+Serif+Pro300,400&display=swap"
        rel="stylesheet"
      />
    </Head>
    <CarouselContainer
      items={items}
      onDeck={onDeck}
      pages={pages}
      posts={posts}
    />
    <style jsx global>{`
      html,
      body,
      #__next,
      div,
      main {
        width: 100%;
        height: 100%;
      }
      body {
        margin: 0;
        font-family: "Source Serif Pro", serif;
        /* line-height: 1.25; */
        font-size: 1.125rem;
        overflow: hidden;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Libre Franklin", sans-serif;
      }

      h1 {
        font-size: 12.1vw;
      }

      h2 {
        color: black;
        font-size: 7.8vh;
        margin-bottom: 0;
      }

      h3 {
        font-size: 4vw;
      }

      h4 {
        font-size: 1.5vw;
        margin: 0;
        color: #a73a3a;
      }

      h5 {
        margin: 0;
      }

      h6 {
        font-family: "Source Serif Pro", serif;
        font-size: 1.7vw;
        color: #fff;
        font-weight: normal;
        margin: 0;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      a:hover {
        text-decoration: underline;
      }

      @media screen and (max-width: 1280px) {
        body {
          font-size: 1rem;
          line-height: 1.35;
        }
      }
      /* @media screen and (max-width: 414px) {
        body {
          font-size: 0.9rem;
        }
      } */
    `}</style>
  </div>
);

export default MainPage;
