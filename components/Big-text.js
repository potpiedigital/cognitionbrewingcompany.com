const BigText = ({ text }) => (
  <h3>
    {text}
    <style jsx>{`
      h3 {
        font-size: 33vh;
        line-height: 0.5;
      }
    `}</style>
  </h3>
);

export default BigText;
