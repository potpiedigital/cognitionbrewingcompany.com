import ListingItem from "./Listing-item";

const OnTap = () => {
  return (
    <div className="on-tap">
      <h4>On Tap Now</h4>
      <div className="flow">
        <ListingItem
          title="Gnome Wrecker belgian style Pale"
          desc="Pale Ale - Belgian"
          numbers="5.9% ABV - 37 IBU"
          rating="beer rating img"
        />
        <ListingItem
          title="Deep Scream Cream Ale"
          desc="Cream Ale"
          numbers="5.2% ABV - 20 IBU"
          rating="beer rating img"
        />
        <ListingItem
          title="Oblivion Milk Stour"
          desc="Stout Milk/Sweet"
          numbers="5% ABV - 30 IBM"
          rating="beer rating img"
        />
        <ListingItem
          title="Octopus Was Very Scary"
          desc="Stout - Other"
          numbers="7.7% ABV - 17IBU"
          rating="beer rating img"
        />
        <ListingItem
          title="Neurosis Pils"
          desc="Pilsner - German"
          numbers="5.9% ABV - 55 IBU"
          rating="beer rating img"
        />
        <ListingItem
          title="Languish"
          desc="Pale Ale - American"
          numbers="5.5% ABV - 45 IBU"
          rating="beer rating img"
        />
        <ListingItem
          title="Black Mass Porter"
          desc="Porter - Other"
          numbers="6.3% ABV - 30 IBU"
          rating="beer rating img"
        />
        <ListingItem
          title="Gnome Wrecker belgian style Pale"
          desc="Pale Ale - Belgian"
          numbers="5.9% ABV - 37 IBU"
          rating="beer rating img"
        />
        <ListingItem
          title="Deep Scream Cream Ale"
          desc="Cream Ale"
          numbers="5.2% ABV - 20 IBU"
          rating="beer rating img"
        />
        <ListingItem
          title="Oblivion Milk Stour"
          desc="Stout Milk/Sweet"
          numbers="5% ABV - 30 IBM"
          rating="beer rating img"
        />
        <ListingItem
          title="Octopus Was Very Scary"
          desc="Stout - Other"
          numbers="7.7% ABV - 17IBU"
          rating="beer rating img"
        />
        <ListingItem
          title="Neurosis Pils"
          desc="Pilsner - German"
          numbers="5.9% ABV - 55 IBU"
          rating="beer rating img"
        />
      </div>
      <style jsx>{`
        .on-tap {
          grid-column: 2 / 15;
          grid-row: 4 / 8;
          margin-top: 2rem;
        }

        h4 {
          padding-bottom: 1.5rem;
        }

        .flow {
          display: flex;
          flex-wrap: wrap;
          justify-content: start;
          height: 90%;
        }
        @media screen and (max-width: 1024px) and (orientation: portrait) {
          .on-tap {
            grid-column: 2 / 9;
            grid-row: 3 / 5;
          }
        }
        @media screen and (max-width: 768px) {
          .on-tap {
            grid-column: 1 / 8;
            margin-left: 2rem;
            grid-row: 2 / 5;
          }
        }
        @media screen and (max-width: 414px) {
          .on-tap {
            margin-top: 3rem;
            grid-row-end: 6;
            grid-column-end: 6;
            margin-left: 0;
          }
          .flow {
            justify-content: center;
          }
          h4 {
            font-size: 5.5vw;
            padding-left: 1.25rem;
            padding-bottom: 0.5rem;
            padding-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OnTap;
