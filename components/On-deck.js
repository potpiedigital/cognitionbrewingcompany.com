import ListingItem from "./Listing-item";

const OnDeck = () => {
  return (
    <div className="on-deck">
      <div className="on-deck-content">
        <div className="da-beers">
          <h4>On Deck</h4>
          <ListingItem
            marginTop="1.5rem"
            title="Bloody Scream"
            desc="Cream Ale"
          />
          <ListingItem
            marginTop="1.5rem"
            title="Tricephalic Head Tripel"
            desc="Belgian Tripel"
          />
          <ListingItem
            marginTop="1.5rem"
            title="Skeleton Wolves Red"
            desc="Red Ale - American Amber / Red"
          />
          <ListingItem
            marginTop="1.5rem"
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
      `}</style>
    </div>
  );
};

export default OnDeck;
