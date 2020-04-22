import { Grid } from "./Grid";
import { ImageBreak } from "./Image-break";
import Historic from "./Historic";
import Colab from "./Colab";
import Forage from "./Forage";

const Brews = () => {
  return (
    <div>
      <Forage />
      <ImageBreak src="https://source.unsplash.com/1600x900/?nature,water" />
      <Historic />
      <ImageBreak src="https://source.unsplash.com/1600x900/?nature,water" />
      <Colab />
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
          width: auto;
        }
      `}</style>
    </div>
  );
};

export default Brews;
