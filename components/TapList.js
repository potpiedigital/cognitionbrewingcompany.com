import OnTap from './On-tap';
import BarrelOffering from './barrel-offerings';
import OnDeck from './On-deck';

const TapList = () => {
  return (
    <div className="main">
      <div className="intro">
      <h2>Tap List</h2>
      <p>To truly experience our Cognition Brewing Company offerings, come and see us and enjoy a pint right were it was created. Share a memory of the “old” tap room. Please support our local downtown restaurants and share a pizza like you won’t find anywhere else.</p>
      </div>
      <OnTap />
      <BarrelOffering />
      <OnDeck />
      <style jsx>{`
      .main {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(24, 1fr);
        grid-template-rows: 1fr 2fr 2fr;
        min-height: 0;
        min-width: 0;
        grid-gap: 1em;
      }
      h3 {
        margin: 0;
      }
      .intro {
        margin: 0;
        grid-column: 2 / 7;
        grid-row-start: 1;
      }
      `}</style>
    </div>
  );
};

export default TapList;
