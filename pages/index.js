import CarouselContainer from "../components/Carousel";

const MainPage = () => (
  <div>
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
      }
    `}</style>
  </div>
);

export default MainPage;
