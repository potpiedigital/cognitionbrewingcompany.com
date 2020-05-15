import OnTap from "./On-tap";
import OnDeck from "./On-deck";
import { Grid } from "./Grid";
import Section from "./Section";

const TapList = () => {
  return (
    <Section id="tap-list">
      <Grid columns={24} width="125vw">
        <div className="intro">
          <h2>Tap List</h2>
          <p>
            To truly experience our Cognition Brewing Company offerings, come
            and see us and enjoy a pint right were it was created. Share a
            memory of the “old” tap room. Please support our local downtown
            restaurants and share a pizza like you won’t find anywhere else.
          </p>
          <img src="/hops.svg" />
        </div>
        <OnTap />
        <OnDeck />
        <h3>Cognition</h3>
        <style jsx>{`
          .intro {
            margin: 0;
            grid-column: 2 / 9;
            grid-row: 1 / 3;
            position: relative;
          }
          .intro p {
            margin-bottom: 0;
          }
          img {
            position: absolute;
            width: auto;
            height: 50vh;
            top: -120px;
            right: -350px;
          }
          h3 {
            font-size: 28vh;
            line-height: 1;
            color: #a73a3a;
            margin: -0.25em 0 0 0;
            grid-column: 18 / 25;
            grid-row: 2 / 8;
            word-wrap: break-word;
            white-space: pre-wrap;
            word-break: break-all;
            text-transform: uppercase;
          }
          @media screen and (max-width: 1370px) {
            img {
              height: 40vh;
              right: -300px;
            }
            h3 {
              font-size: 24vh;
              margin-top: 1rem;
              grid-row-start: 1;
            }
          }
          @media screen and (max-width: 1280px) {
            h3 {
              grid-column: 18 / 25;
              font-size: 28vh;
              margin-top: 4rem;
            }
            img {
              height: 50vh;
              right: -250px;
            }
          }
          @media screen and (max-width: 768px) {
            .intro {
              grid-column: 1 /8;
              grid-row: 1 / 2;
              margin: 0 2rem;
            }
            h3 {
              grid-column: 1 / 9;
              grid-row: 5 / 9;
              margin-top: 6rem;
              margin-left: 2rem;
            }
            img {
              display: none;
            }
          }
        `}</style>
      </Grid>
    </Section>
  );
};

export default TapList;
