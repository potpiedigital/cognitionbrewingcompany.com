const Section = ({ id, children, style }) => (
  <section style={style} id={id}>
    {children}
    <style jsx>{`
      section {
        /* width: 100vw;
        max-width: 1250px; */
        height: 100vh;
        overflow-y: hidden;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 0 auto;
      }
      h1 {
        margin: 0;
      }
    `}</style>
  </section>
);

export default Section;
