const Hamburger = ({ isNavShowing, setIsNavShowing }) => (
  <div className="menuToggle">
    <input
      checked={isNavShowing}
      onChange={() => setIsNavShowing(!isNavShowing)}
      type="checkbox"
    />

    <span></span>
    <span></span>
    <span></span>
    <style jsx>{`
      .menuToggle {
        display: block;
        width: auto;
        margin: 20px;
        transform: rotate(90deg);
        z-index: 1;

        -webkit-user-select: none;
        user-select: none;
      }

      .menuToggle a {
        text-decoration: none;
        color: #fff;

        transition: color 0.3s ease;
      }
      .menuToggle input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;

        cursor: pointer;

        opacity: 0; /* hide this */
        z-index: 2; /* and place it over the hamburger */

        -webkit-touch-callout: none;
      }
      .menuToggle span {
        display: block;
        width: 33px;
        height: 2px;
        margin-bottom: 5px;
        position: relative;
        background: var(--navColor);
        border-radius: 3px;

        z-index: 1;

        transform-origin: 4px 0px;

        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
          background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
      }

      .menuToggle span:first-child {
        transform-origin: 0% 0%;
      }

      .menuToggle span:nth-last-child(2) {
        transform-origin: 0% 100%;
      }
      .menuToggle input:checked ~ span {
        opacity: 1;
        transform: rotate(-45deg) translate(-12px, 20px);
        background: var(--navColor);
      }
      .menuToggle input:checked ~ span:nth-last-child(1) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }
      .menuToggle input:checked ~ span:nth-last-child(2) {
        transform: rotate(45deg) translate(0, -8px);
      }
      .menuToggle input:checked ~ ul {
        transform: none;
      }
      @media screen and (orientation: portrait) {
        .menuToggle {
          transform: rotate(0deg);
        }
      }
    `}</style>
  </div>
);

export default Hamburger;
