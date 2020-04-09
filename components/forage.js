const Forage = ({ className }) => (
  <div className={className}>
    <hr />
    <div className="forage-text">
      <p>
        To truly experience our Cognition Brewing Company offerings, come and
        see us and enjoy a pint right were it was created. Share a memory of the
        “old” tap room. Please support our local downtown restaurants and share
        a pizza like you won’t find anywhere else.
      </p>
      <p>
        To truly experience our Cognition Brewing Company offerings, come and
        see us and enjoy a pint right were it was created. Share a memory of the
        “old” tap room. Please support our local downtown restaurants and share
        a pizza like you won’t find anywhere else.
      </p>
    </div>
    <ul className="forage-list">
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
    <h2>Forage</h2>
    <style jsx>{`
      div {
        grid-row: 4 / 9;
        grid-column: 2 / 12;
      }
      hr {
        grid-row: 4;
        grid-column: 2 / 5;
        border: 5px solid #a73a3a;
        width: 240px;
        height: 0;
      }
      .forage-text {
        display: flex;
        grid-row: 4 / 5;
        grid-column: 2 / 6;
        height: auto;
      }
      .forage-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style: none;
        grid-row: 5 / 7;
        grid-column: 2 / 6;
        padding: 0;
      }
      li {
        width: 21em;
        color: #a73a3a;
      }
      h2 {
        font-size: 28vh;
        grid-column: 2 / 6;
        grid-row-start: 6;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

export default Forage;
