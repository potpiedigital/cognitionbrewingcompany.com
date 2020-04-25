import { Grid } from "./Grid";
import { ImageBreak } from "./Image-break";
import Historic from "./Historic";
import Colab from "./Colab";
import Forage from "./Forage";

const Brews = () => {
  return (
    <div>
      <Forage />
      <ImageBreak src="/Cognition-Brewing-2.jpg" />
      <Historic />
      <ImageBreak src="/Cognition-Brewing-2.jpg" />
      <Colab />
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
          /* width: auto; */
        }
      `}</style>
    </div>
  );
};

export default Brews;
