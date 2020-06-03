import ListingItem from "./Listing-item";

const OnTap = ({ items }) => (
  <div className="on-tap">
    <h4>On Tap Now</h4>
    <div className="flow">
      {items.map((item) => (
        <ListingItem
          key={item.id}
          title={item.name}
          desc={item.style}
          numbers={`${item.abv}% ABV - ${item.ibu} IBU`}
          rating={parseFloat(item.rating, 10).toFixed(2)}
        />
      ))}
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
      @media screen and (max-width: 768px) {
        .on-tap {
          grid-column: 1 / 8;
          grid-row: 2 / 4;
          margin-left: 2rem;
        }
      }
    `}</style>
  </div>
);

export default OnTap;
