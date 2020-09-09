export const ImageBreak = ({ src, page }) => {
  return (
    <>
      <img src={page.acf[src]} />
      <style jsx>{`
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          display: block;
          overflow: visible;
        }
      `}</style>
    </>
  );
};
