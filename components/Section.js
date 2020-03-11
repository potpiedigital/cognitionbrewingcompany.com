const Section = ({ id, children }) => (
  <section id={id}>
    {children}
    <style jsx>{`
      section {
        width: 100vw;
        height: 100vh;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 0 100%;
      }
      h1 {
        margin: 0;
      }
    `}</style>
  </section>
);

export default Section;
