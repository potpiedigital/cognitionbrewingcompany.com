import { Grid } from "./Grid";

const Events = () => (
  // <div className="main-container-event">
  <Grid backgroundColor="#a73a3a">
    <h2>Cog Events</h2>
    <div className="event">
      <h3>Event Title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <a href="www.facebook.com">More Details</a>
      <h5>Cog Events</h5>
    </div>
    <div className="event-img">
      <img src="https://source.unsplash.com/random/beer" />
    </div>
    <style jsx>{`
      h2 {
        grid-column: 3 / 9;
        grid-row-start: 1;
        font-size: 60px;
        color: #fff;
      }
      h3 {
        font-size: 48px;
        margin: 0;
      }
      h5 {
        font-size: 21vh;
        line-height: 1;
        text-transform: uppercase;
        color: #973434;
        position: absolute;
        top: 18rem;
      }
      .event {
        grid-column: 3 / 10;
        grid-row-start: 3;
        display: flex;
        flex-direction: column;
        z-index: 1;
        color: #fff;
        position: relative;
      }
      a,
      p {
        color: #fff;
        z-index: 1;
      }

      .event-img {
        grid-row-start: 3;
        grid-column-start: 12;
        margin-top: -4em;
        transform: rotate(15deg);
        box-shadow: 10px 0 60px rgba(0, 0, 0, 0.1);
        width: 30vw;
        height: 50vh;
      }
      img {
        width: 100%;
        height: 100%;
      }
    `}</style>
  </Grid>
);

export default Events;
