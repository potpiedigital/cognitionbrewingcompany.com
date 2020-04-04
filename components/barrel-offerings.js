import ListingItem from "./Listing-item";

const BarrelOffering = () => {
  return (
    <div className="barrel">
      <h4>Barrel Offerings</h4>
      <p>these beers are limited and not available in Growlers</p>
      <div className="flow">
        <ListingItem
          title="Bloody Scream"
          desc="Cream Ale"
          numbers="5.5% ABV - 45 IBU"
          rating="beer rating img"
        />
        <ListingItem
          title="Tricephalic Head Tripel"
          desc="Belgian Tripel"
          numbers="9.4% ABV - 34 IBU"
          rating="beer rating img"
        />
        <ListingItem
          title="Skeleton Wolves Red"
          desc="Red Ale - American Amber / Red"
          numbers="4% ABV - 23 IBU"
          rating="beer rating img"
        />
        <ListingItem
          title="Hobjection Your Honor"
          desc="IPA - American"
          numbers="6.5% ABV - 45 IBU"
          rating="beer rating img"
        />
        <ListingItem
          title="Bloody Scream"
          desc="Cream Ale"
          numbers="5.5% ABV - 45 IBU"
          rating="beer rating img"
        />
      </div>

      <style jsx>{`
        .barrel {
          grid-column: 2 / 12;
          grid-row: 6 / 8;
          margin-top: 2em;
        }

        .flow {
          display: flex;
          flex-wrap: wrap;
          justify-content: start;
        }
      `}</style>
    </div>
  );
};

export default BarrelOffering;
