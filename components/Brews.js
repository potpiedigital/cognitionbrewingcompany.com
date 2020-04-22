import { Grid } from "./Grid";
import { ImageBreak } from "./Image-break";
import Historic from "./Historic";
import Colab from "./Colab";
import Forage from "./Forage";

const Brews = () => {
  return (
    <Grid columns={5} rows={1} width="max-content">
      <Forage />
      <ImageBreak src="https://source.unsplash.com/random/wine" />
      <Historic />
      <ImageBreak src="https://source.unsplash.com/random/chocolate" />
      <Colab />
    </Grid>
  );
};

export default Brews;
