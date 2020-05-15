const Section = ({ id, children, style }) => (
  <section style={style} id={id}>
    {children}
    <style jsx>{`
      section {
        height: 100vh;
        /* height: calc(var(--vh, 1vh) * 100); */
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
      @media screen and (max-width: 768px) {
        #home {
          height: 50vh;
        }
        #about {
          height: 70vh;
        }
        #tap-list {
          height: 200vh;
        }
      }
    `}</style>
  </section>
);

export default Section;
