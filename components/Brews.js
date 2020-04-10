import Forage from "./Forage";
import { Grid } from "./Grid";

const Brews = () => {
  return (
    <Grid columns={36}>
      <div className="brew-main-content">
        <h2>Cog Brews</h2>
        <p className="brew-text">
          At Cognition Brewing Company we plan to have many different styles of
          beer available and there will always be something new on tap to enjoy.
          We will have a number of regularly rotating beers as well as some
          seasonal releases. We will also have some very limited release beers
          that will be featured very briefly in the pub and mostly at beer
          festivals.
        </p>
      </div>
      <Forage className="forage-grid" />
      <style jsx>{`
        .brew-main-content {
          grid-column: 2 / 6;
          grid-row: 1;
          display: flex;
          flex-direction: column;
        }
        .forage-grid {
          grid-row-start: 3;
        }
      `}</style>
    </Grid>
  );
};

export default Brews;
