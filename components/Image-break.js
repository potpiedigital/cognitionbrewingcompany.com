export const ImageBreak = ({ src }) => (
  <>
    <img src={src} />
    <style jsx>{`
      img {
        height: 100vh;
        width: 100vw;
        overflow: visible;
      }
    `}</style>
  </>
);
