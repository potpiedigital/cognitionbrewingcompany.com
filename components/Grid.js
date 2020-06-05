export const Grid = ({
  children,
  backgroundColor,
  columns = 12,
  width = "100%",
}) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      div {
        width: ${width};
        display: grid;
        grid-template-columns: repeat(${columns}, 1fr);
        grid-template-rows: repeat(8, minmax(0, 1fr));
        min-height: 0;
        min-width: 0;
        grid-gap: 1em;
        background-color: ${backgroundColor};
      }
      @media screen and (orientation: portrait) {
        div {
          grid-template-columns: repeat(8, 1fr);
          width: 100vw;
        }
        #tap-list {
          grid-template-rows: repeat(12, minmax(0, 1fr));
        }
        @media screen and (max-width: 414px) {
          div {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      }
    `}</style>
  </>
);
