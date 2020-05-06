import CarouselContainer from "../components/Carousel";
import Head from "next/head";
import React, { useState, useEffect } from "react";

const MainPage = () => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Libre+Franklin:400,600,700|Source+Serif+Pro300,400&display=swap"
        rel="stylesheet"
      />
    </Head>
    <CarouselContainer />
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

      @media screen and (max-width: 1280px) {
        body {
          font-size: 1rem;
          line-height: 1.35;
        }
      }
    `}</style>
  </div>
);

export default MainPage;
