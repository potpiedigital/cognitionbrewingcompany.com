import { Grid } from "../components/Grid";

const SingleStory = ({ image, title, text }) => (
  <div>
    <img src={image} />
    <h2>{title}</h2>
    <p>{text}</p>
    <style jsx>{`
      div {
        width: 100%;
        margin-bottom: 1rem;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(2, minmax(0, 1fr));
        min-height: 0;
        min-width: 0;
        grid-gap: 1em;
      }
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        overflow: hidden;
        grid-column: 1 / 6;
        grid-row: 1 / 3;
      }
      h2,
      p {
        grid-column: 6 / 13;
        grid-row: 1;
      }
      p {
        margin-top: 4rem;
      }
      @media screen and (max-width: 414px) {
        div {
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(5, 1fr);
        }

        img {
          grid-column: 1 / 6;
          grid-row: 1 / 4;
        }
        h2,
        p {
          grid-column: 1 / 6;
          grid-row: 4 / 6;
        }
        h2 {
          margin-top: 0;
        }
      }
    `}</style>
  </div>
);

export default SingleStory;
