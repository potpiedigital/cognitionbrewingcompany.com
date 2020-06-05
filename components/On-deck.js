import ListingItem from "./Listing-item";

const OnDeck = () => {
  return (
    <div className="on-deck">
      <div className="on-deck-content">
        <h4>On Deck</h4>
        <div className="da-beers">
          <ListingItem
            marginTop="1.5rem"
            width="100%"
            title="Bloody Scream"
            desc="Cream Ale"
          />
          <ListingItem
            marginTop="1.5rem"
            width="100%"
            title="Tricephalic Head Tripel"
            desc="Belgian Tripel"
          />
          <ListingItem
            marginTop="1.5rem"
            width="100%"
            title="Skeleton Wolves Red"
            desc="Red Ale - American Amber / Red"
          />
          <ListingItem
            marginTop="1.5rem"
            width="100%"
            title="Hobjection Your Honor"
            desc="IPA - American."
          />
        </div>
      </div>
      <style jsx>{`
        .on-deck {
          background-color: #a73a3a;
          display: flex;
          flex-direction: column;
          grid-column: 14 / 18;
          grid-row: 1 / 7;
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 83%, 0% 100%);
          clip-path: polygon(0 0, 100% 0, 100% 83%, 0% 100%);
        }
        .on-deck-content {
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 83%, 0% 100%);
          clip-path: polygon(0 0, 100% 0, 100% 83%, 0% 100%);
          background-color: #ededed;
          width: 98%;
          height: 99%;
          margin: 0 auto;
        }
        .da-beers {
          width: 75%;
          height: 80%;
          margin: 2rem auto;
        }
        h4 {
          padding-left: 2rem;
        }

        @media screen and (max-width: 1370px) {
          .on-deck {
            grid-row-end: 6;
          }
        }
        @media screen and (max-width: 1280px) {
          .on-deck {
            grid-row-end: 7;
          }
        }
        @media screen and (max-width: 1024px) and (orientation: portrait) {
          .on-deck {
            grid-column: 7 / 9;
            grid-row: 1 / 3;
          }
        }
        @media screen and (max-width: 768px) {
          .on-deck {
            grid-column: 6 / 9;
          }
        }
        @media screen and (max-width: 414px) {
          .on-deck {
            grid-column: 1 / 6;
            grid-row: 6 / 8;
          }
          h4 {
            font-size: 5.5vw;
            padding-bottom: 0.5rem;
            padding-top: 1rem;
          }
          .da-beers {
            display: flex;
            flex-wrap: wrap;
            width: 80%;
            height: 50%;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default OnDeck;
