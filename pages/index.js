import CarouselContainer from "../components/Carousel";
import Head from "next/head";

const MainPage = () => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Libre+Franklin:400,600,700|Source+Serif+Pro&display=swap"
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
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Libre Franklin", sans-serif;
      }
    `}</style>
  </div>
);

export default MainPage;
