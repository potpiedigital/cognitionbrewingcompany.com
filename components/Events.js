const Events = () => (
    <div className="main-container-event">
      <h2>Cog Events</h2>
      <div className="event">
        <h3>Event Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="www.facebook.com">More Details</a>
      </div>
      <h5>Cog Events</h5>
      <div className="event-img">
        <img src="https://source.unsplash.com/random/" />
      </div>
      <style jsx>{`
        .main-container-event {
          width: 100%;
          display: grid;
          position: relative;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: 2fr 3fr 3fr;
          min-height: 0;
          min-width: 0;
          grid-gap: 1em;
          background-color: #a73a3a;
        }
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
          font-size: 25vh;
          line-height: 1;
          text-transform: uppercase;
          color: #973434;
          position: absolute;
          grid-column-start: 3;
          bottom: 0;
        }
        .event {
          grid-column: 3 / 10;
          grid-row-start: 2;
          display: flex;
          flex-direction: column;
          z-index: 1;
          color: #fff;
        }

        a {
          color: #fff;
        }

        .event-img {
          grid-row-start: 2;
          grid-column-start: 12;
          transform: rotate(15deg);
          margin-top: -4em;
          box-shadow: 10px 0 60px rgba(0, 0, 0, .1);
          width: 40vw;
          height: 60vh;
        }
        img {
          width: 100%;
          height: 100%;
        }
    `}</style>
    </div>
);

export default Events;
