const ListingItem = ({
  title,
  desc,
  numbers,
  rating,
  marginTop = "0",
  width = "20%",
}) => (
  <div className="listing">
    <h5>{title}</h5>
    <p>{desc}</p>
    <p>{numbers}</p>
    <p>{rating}</p>
    <style jsx>{`
      .listing {
        display: flex;
        flex-direction: column;
        height: auto;
        width: ${width};
        padding-right: 2rem;
        margin-top: ${marginTop};
      }
      p {
        margin: 0;
        font-size: 0.825rem;
      }
      @media screen and (max-width: 414px) {
        .listing {
          width: 43%;
          padding-right: 0;
        }
        .listing:nth-child(odd) {
          padding-right: 1rem;
        }
        h5 {
          font-size: 1rem;
        }
      }
    `}</style>
  </div>
);

export default ListingItem;
