import { Grid } from "../components/Grid";

const SingleStory = ({ image, title, text }) => (
  <Grid>
    <img src={image} />
    <h2>{title}</h2>
    <p>{text}</p>
    <style jsx>{`
      img {
        width: 100%;
        height: auto;
        grid-column: 2 / 5;
        grid-row: 1 / 2;
      }
      h2,
      p {
        grid-column: 6 / 11;
        grid-row: 1;
      }
      p {
        margin-top: 4rem;
      }
    `}</style>
  </Grid>
);

export default SingleStory;
