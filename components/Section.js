const Section = ({ id, children, style }) => (
  <section style={style} id={id}>
    {children}
    <style jsx>{`
      section {
        width: auto;
        height: 100vh;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 0 100%;
      }
    `}</style>
  </section>
);

export default Section;
