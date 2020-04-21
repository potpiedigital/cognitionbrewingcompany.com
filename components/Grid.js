export const Grid = ({
  children,
  backgroundColor,
  columns = 12,
  rows = 8,
  width = "100%",
}) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      div {
        width: ${width};
        display: grid;
        grid-template-columns: repeat(${columns}, 1fr);
        grid-template-rows: repeat(${rows}, minmax(0, 1fr));
        min-height: 0;
        min-width: 0;
        grid-gap: 1em;
        background-color: ${backgroundColor};
      }
    `}</style>
  </>
);