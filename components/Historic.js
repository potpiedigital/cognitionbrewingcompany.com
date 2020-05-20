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
      <h3>Historic</h3>
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
          grid-column: 10 / 17;
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
        h3 {
          font-size: 28vh;
          grid-column: 2 / 12;
          grid-row-start: 6;
          margin-top: 4rem;
          z-index: 1;
        }

        @media screen and (max-width: 1280px) {
          .beer-list {
            grid-row-start: 5;
          }
        }
        @media screen and (max-width: 768px) {
          h3 {
            grid-column: 1 / 9;
            grid-row: 1;
            font-size: 21vh;
            margin-top: 0;
            margin-left: -2rem;
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
      `}</style>
    </Grid>
  </Section>
);

export default Historic;
