import ListingItem from './Listing-item';

const TapList = () => {
  return (
    <div className="main">
      <div className="intro">
      <h2>Tap List</h2>
      <p>To truly experience our Cognition Brewing Company offerings, come and see us and enjoy a pint right were it was created. Share a memory of the “old” tap room. Please support our local downtown restaurants and share a pizza like you won’t find anywhere else.</p>
      </div>
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
      </div>
      </div>
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
      </div>
      <style jsx>{`
      .main {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(24, 1fr);
        grid-template-rows: 1fr 2fr 2fr;
        min-height: 0;
        min-width: 0;
        grid-gap: 1em;
        background-color: #ededed;
      }

      h3 {
        margin: 0;
      }

      .intro {
        margin: 0;
        grid-column: 2 / 7;
        grid-row-start: 1;
      }

      .on-tap {
        grid-column: 2 / 12;
        grid-row-start: 2;
      }

      .barrel {
        grid-column: 2 / 12;
        grid-row-start: 3;
      }

      .flow {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      `}</style>
    </div>
  );
};

export default TapList;
