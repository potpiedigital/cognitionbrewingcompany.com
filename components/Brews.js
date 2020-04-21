import Forage from "./Forage";
import { Grid } from "./Grid";
import Historic from "./Historic";
import Colab from "./Colab";

const Brews = () => {
  return (
    <Grid columns={3} rows={1} width="max-content">
      <Forage />
      <Historic />
      <Colab />
    </Grid>
  );
};

export default Brews;
