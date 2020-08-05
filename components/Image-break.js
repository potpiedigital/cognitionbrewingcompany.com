export const ImageBreak = ({ src, page }) => {
  return (
    <>
      <img src={page.acf[src]} />
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
};
