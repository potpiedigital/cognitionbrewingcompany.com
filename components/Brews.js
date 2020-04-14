import Forage from "./forage";

const Brews = () => {
  return (
    <div>
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
        div {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(8, minmax(0, 1fr));
          min-height: 0;
          min-width: 0;
          grid-gap: 1em;
          overflow: hidden;
        }
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
    </div>
  );
};

export default Brews;
