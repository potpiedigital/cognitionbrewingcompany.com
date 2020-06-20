import { Grid } from "./Grid";
import Section from "./Section";

const Historic = () => (
  <Section id="historic">
    <Grid backgroundColor="#a73a3a" columns={14} width="90vw">
      <hr />
      <div className="historic-text">
        <p>
          To truly experience our Cognition Brewing Company offerings, come and
          see us and enjoy a pint right were it was created. Share a memory of
          the “old” tap room. Please support our local downtown restaurants and
          share a pizza like you won’t find anywhere else.
        </p>
        <p>
          To truly experience our Cognition Brewing Company offerings, come and
          see us and enjoy a pint right were it was created. Share a memory of
          the “old” tap room. Please support our local downtown restaurants and
          share a pizza like you won’t find anywhere else.
        </p>
      </div>
      <ul className="beer-list">
        <li>The Unicorn in Captivity</li>
        <li>Faded Reality</li>
        <li>Rett Farm</li>
        <li>Storm the castle</li>
        <li>Kamadhenu’s Milk</li>
        <li>Nowhere / Catastrophe</li>
        <li>The Unicorn in Captivity</li>
        <li>Storm the castle</li>
        <li>Kamadhenu’s Milk</li>
      </ul>
      <div className="historic-imgs">
        <img className="history-img-1" src="/historic-1.jpg" />
        <img className="history-img-2" src="/historic-2.jpg" />
        <img className="history-img-3" src="/historic-3.jpg" />
      </div>
      <div className="big-text-container">
        <h3>Historic</h3>
      </div>
      <style jsx>{`
        hr {
          grid-row: 1;
          grid-column: 2 / 7;
          border: 5px solid #fff;
          width: 100%;
          height: 0;
          margin-top: 3rem;
        }
        .historic-text {
          color: #fff;
          grid-row: 1;
          grid-column: 2 / 8;
          margin-top: 4rem;
        }
        .beer-list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          list-style: none;
          grid-row-start: 4;
          grid-column: 2 / 10;
          padding: 0;
        }
        li {
          width: 50%;
          color: #000000;
        }
        .historic-imgs {
          grid-column: 10 / 15;
          grid-row: 1 / 6;
          position: relative;
        }
        .history-img-1 {
          width: 24vw;
          height: auto;
          transform: rotate(15deg);
          box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
          position: absolute;
          top: 0;
          right: 0;
        }
        .history-img-2 {
          width: 26vw;
          height: auto;
          transform: rotate(-15deg);
          box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
          position: absolute;
          bottom: -10%;
          left: -10%;
        }
        .history-img-3 {
          width: 13vw;
          height: auto;
          box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
          position: absolute;
          bottom: -25%;
          right: -10%;
        }
        .big-text-container {
          grid-column: 2 / 12;
          grid-row: 6 / 9;
          z-index: 1;
          margin-top: 3rem;
        }
        h3 {
          font-size: 28vh;
          margin-top: 0;
          margin-bottom: 0;
        }

        @media screen and (max-width: 1280px) {
          .beer-list {
            grid-row-start: 5;
          }
        }
        @media screen and (max-width: 1024px) and (orientation: portrait) {
          .historic-imgs {
            grid-column: 1 / 9;
            grid-row: 3 / 5;
          }
          .history-img-1 {
            top: -21%;
            right: 35%;
          }
          .history-img-2 {
            bottom: 20%;
            left: 8%;
            width: 30vw;
          }
          .history-img-3 {
            bottom: 0%;
            right: 10%;
            width: 25vw;
            transform: rotate(-15deg);
          }
          .beer-list {
            grid-column: 2 / 8;
          }
          .big-text-container {
            grid-column: 1 / 7;
            margin-left: -4rem;
            margin-top: 0;
          }
          h3 {
            font-size: 24vh;
          }
        }
        @media screen and (max-width: 768px) {
          .big-text-container {
            grid-column: 1 / 9;
            grid-row: 1 / 3;
            margin-left: 0;
            overflow: hidden;
          }
          h3 {
            font-size: 21vh;
          }
          hr,
          .historic-text {
            grid-row: 5;
          }
          .beer-list {
            grid-row: 7;
            margin-top: 2rem;
          }
          .historic-imgs {
            grid-column: 2 / 8;
            grid-row: 1 / 4;
          }
          .history-img-1 {
            width: 36vw;
          }
          .history-img-2 {
            width: 40vw;
            bottom: -30%;
            left: -5%;
          }
          .history-img-3 {
            width: 24vw;
            bottom: -40%;
            right: -5%;
            transform: rotate(15deg);
          }
        }
        @media screen and (max-width: 414px) {
          .big-text-container {
            grid-column-end: 6;
          }
          h3 {
            font-size: 16vh;
          }
          .historic-imgs {
            grid-column: 1 / 6;
            grid-row-end: 3;
          }
          .history-img-1 {
            width: 45vw;
            top: -5%;
            right: 10%;
          }
          .history-img-2 {
            width: 50vw;
            bottom: -55%;
            left: 5%;
          }
          .history-img-3 {
            width: 29vw;
            bottom: -45%;
            right: 5%;
          }
          hr {
            grid-row: 4;
            grid-column: 2 / 5;
            margin-left: -3rem;
            margin-top: 2rem;
            width: 130%;
            margin-top: 0;
          }
          .historic-text {
            grid-row: 4 / 5;
            grid-column: 1 / 6;
            margin-left: 0;
            margin-top: 1rem;
          }
          .historic-text p {
            padding: 0 1rem;
          }
          .beer-list {
            grid-row: 7 / 9;
            grid-column: 1 / 6;
            margin-top: -2rem;
            margin-left: 1rem;
            flex-direction: column;
          }
        }
      `}</style>
    </Grid>
  </Section>
);

export default Historic;
