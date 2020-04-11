import Forage from "./Forage";
import { Grid } from "./Grid";

const Brews = () => {
  return (
    <Grid columns={3} rows={1}>
      <Forage />
    </Grid>
  );
};

export default Brews;
