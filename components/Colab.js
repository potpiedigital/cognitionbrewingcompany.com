import { Grid } from "./Grid";

const Colab = () => (
  <Grid columns={16} width="93.5vw">
    <div className="colab-info">
      <img className="teaser-beer" src="/beer-glass.png" />
      <hr />
      <div className="colab-text">
        <p>
          To truly experience our Cognition Brewing Company offerings, come and
          see us and enjoy a pint right were it was created. Share a memory of
          the “old” tap room. Please support our local downtown restaurants and
          share a pizza like you won’t find anywhere else.
        </p>
        <p>
          To truly experience our Cognition Brewing Company offerings, come and
          see us and enjoy a pint right were it was created. Share a memory of
          the “old” tap room. Please support our local downtown restaurants and
          share a pizza like you won’t find anywhere else.
        </p>
      </div>
    </div>
    <ul className="beer-list">
      <li>The Unicorn in Captivity</li>
      <li>Faded Reality</li>
      <li>Rett Farm</li>
      <li>Storm the castle</li>
      <li>Kamadhenu’s Milk</li>
      <li>Nowhere / Catastrophe</li>
      <li>The Unicorn in Captivity</li>
      <li>Storm the castle</li>
      <li>Kamadhenu’s Milk</li>
    </ul>
    <h3>Collaboration</h3>
    <style jsx>{`
      .colab-info {
        grid-row: 2;
        grid-column: 2 / 8;
        position: relative;
      }

      .teaser-beer {
        position: absolute;
        left: 0;
        top: -340%;
      }

      hr {
        border: 5px solid #a73a3a;
        width: 100%;
        height: 0;
        margin-top: 3rem;
      }
      yarn .colab-text {
        margin-top: 2rem;
      }
      .beer-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style: none;
        grid-row-start: 4;
        grid-column: 2 / 10;
        padding: 0;
        margin-top: 2rem;
      }
      li {
        width: 50%;
        color: #a73a3a;
      }
      h3 {
        font-size: 28vh;
        line-height: 0.8;
        word-wrap: break-word;
        color: #a73a3a;
        grid-column: 3 / 14;
        grid-row-start: 5;
        margin-top: 4rem;
        z-index: 1;
        hyphens: auto;
      }
    `}</style>
  </Grid>
);

export default Colab;
