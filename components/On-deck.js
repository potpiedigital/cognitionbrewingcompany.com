import ListingItem from "./Listing-item";

const OnDeck = () => {
  return (
    <div className="on-deck">
      <div className="on-deck-content">
        <div className="da-beers">
        <h4>On Deck</h4>
        <ListingItem marginTop="1.5rem"
          title="Bloody Scream"
          desc="Cream Ale"
          numbers="5.5% ABV - 45 IBU"
          rating="beer rating img"
        />
        <ListingItem marginTop="1.5rem"
          title="Tricephalic Head Tripel"
          desc="Belgian Tripel"
          numbers="9.4% ABV - 34 IBU"
          rating="beer rating img"
        />
        <ListingItem marginTop="1.5rem"
          title="Skeleton Wolves Red"
          desc="Red Ale - American Amber / Red"
          numbers="4% ABV - 23 IBU"
          rating="beer rating img"
        />
        <ListingItem marginTop="1.5rem"
          title="Hobjection Your Honor"
          desc="IPA - American"
          numbers="6.5% ABV - 45 IBU"
          rating="beer rating img"
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
      `}</style>
    </div>
  );
};

export default OnDeck;
