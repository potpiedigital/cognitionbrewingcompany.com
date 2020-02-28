import Brews from "./Brews";
import Blog from "./Blog";
import AboutNew from "./AboutNew";
import TapList from "./TapList";
import Events from "./Events";

const Carousel = () => {
  return (
    <div id="container">
      <div id="container2">
        <div id="about-new" className="box one">
          <AboutNew />
        </div>
        <div id="tap-list" className="box two">
          <TapList />
        </div>
        <div id="events" className="box three">
          <Events />
        </div>
        <div id="blog" className="box four">
          <Blog />
        </div>
        <div id="brews" className="box five">
          <Brews />
        </div>
      </div>
      <style jsx>{`
        #container .box {
          width: 100vw;
          height: 100vh;
          display: inline-block;
          position: relative;
        }
        #container .box > div {
          width: 2px;
          /*width: 100%;
          height: 100%;
          color: #fff;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -50px 0 0 -50px;
          */
          line-height: 0.7;
        }
        #container {
          overflow-y: scroll;
          overflow-x: hidden;
          transform: rotate(270deg) translateX(-100%);
          transform-origin: top left;
          background-color: #999;
          position: absolute;
          width: 100vh;
          height: 100vw;
        }
        #container2 {
          transform: rotate(90deg) translateY(-100vh);
          transform-origin: top left;
          white-space: nowrap;
        }
        .one {
          background-color: #45ccff;
        }
        .two {
          background-color: #49e83e;
        }
        .three {
          background-color: #edde05;
        }
        .four {
          background-color: #e84b30;
        }
        .five {
          background-color: #ededed;
        }
        /* Translating the content's X ruines the scrollbar length.
        */
      `}</style>
    </div>
  );
};

export default Carousel;
