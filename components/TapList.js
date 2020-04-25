import OnTap from "./On-tap";
import BarrelOffering from "./barrel-offerings";
import OnDeck from "./On-deck";
import { Grid } from "./Grid";

const TapList = () => {
  return (
    <Grid columns={24} width="125vw">
      <div className="intro">
        <h2>Tap List</h2>
        <p>
          To truly experience our Cognition Brewing Company offerings, come and
          see us and enjoy a pint right were it was created. Share a memory of
          the “old” tap room. Please support our local downtown restaurants and
          share a pizza like you won’t find anywhere else.
        </p>
        <img src="/hops.svg" />
      </div>
      <OnTap />
      <BarrelOffering />
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
          text-transform: uppercase;
        }
        @media screen and (max-width: 1280px) {
          h3 {
            grid-column: 17 / 23;
            font-size: 32vh;
          }
        }
      `}</style>
    </Grid>
  );
};

export default TapList;
