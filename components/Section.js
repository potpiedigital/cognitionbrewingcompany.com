const Section = ({ id, children }) => (
  <section id={id}>
    <h1>{children}</h1>
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
    `}</style>
  </section>
);

export default Section;
