import Brews from "./Brews";
import Blog from "./Blog";
import AboutNew from "./AboutNew";
import TapList from "./TapList";
import Events from "./Events";

const Carousel = () => {
  return (
    <div className="horizontal-scroll-wrapper  rectangles">
      <div>
        <AboutNew />
      </div>
      <div>
        <TapList />
      </div>
      <div>
        <Events />
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <Brews />
      </div>
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 2px;
          height: 2px;
        }
        ::-webkit-scrollbar-button {
          width: 2px;
          height: 2px;
        }

        div {
          box-sizing: border-box;
        }

        body {
          background: #111;
        }

        .horizontal-scroll-wrapper {
          /* display: block;
          top: 0;
          left: 0; */
          width: 80px;
          height: 100%;
          max-height: 1000px;
          margin: 0;
          padding: 2px 0;
          background: #abc;
          overflow-y: auto;
          overflow-x: hidden;
          transform: rotate(-90deg) translateY(-80px);
          transform-origin: right top;
        }
        .horizontal-scroll-wrapper > div {
          display: block;
          padding: 5px;
          background: #cab;
          transform: rotate(90deg);
          transform-origin: right top;
        }

        .rectangles {
          padding: 400px 0 0 0;
        }
        .rectangles > div {
          width: 400px;
          height: 400px;
          margin: 50px 10px;
          padding: 5px;
          background: #cab;
          transform: rotate(90deg) translateY(80px);
          transform-origin: right top;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
