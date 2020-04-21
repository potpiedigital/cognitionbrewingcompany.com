import Forage from "./forage";
import { Grid } from "./Grid";
import Historic from "./Historic";


const Brews = () => {
  return (
    <Grid columns={3} rows={1}>
      <Forage />
      <Historic />
    </Grid>
  );
};

export default Brews;
