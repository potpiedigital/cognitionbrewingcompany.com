const WhiteParagraph = ({ children }) => (
  <>
    <p>{children}</p>
    <style jsx>{`
      p {
        display: inline-block;
        font-weight: 300;
        margin-top: 0;
        color: #fff;
      }
      @media screen and (max-width: 1024px) and (orientation: portrait) {
        p {
          margin-right: 1rem;
          padding-right: 2rem;
        }
      }
      @media screen and (max-width: 768px) {
        p {
          padding-left: 3rem;
          padding-right: 0;
        }
      }
      @media screen and (max-width: 414px) {
        p {
          margin-right: 0;
          padding: 0 1rem;
        }
      }
    `}</style>
  </>
);

export default WhiteParagraph;
