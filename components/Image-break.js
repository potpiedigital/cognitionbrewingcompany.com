export const ImageBreak = ({ src }) => (
  <>
    <img src={src} />
    <style jsx>{`
      img {
        height: 100vh;
        width: 100vw;
        object-fit: cover;
        display: block;
        overflow: visible;
      }
    `}</style>
  </>
);
