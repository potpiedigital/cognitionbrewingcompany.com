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
      @media screen and (max-width: 1024px) and (orientation: portrait) {
        #home {
          height: 60vh;
        }
        #about {
          height: 70vh;
        }
        #tap-list {
          height: 120vh;
        }
        #blog {
          height: 65vh;
        }
        #brews {
          overflow: hidden;
        }
      }
      @media screen and (max-width: 768px) {
        #home {
          height: 70vh;
        }
        #tap-list {
          height: 200vh;
        }
        #brews {
          height: 120vh;
        }
        #historic {
          overflow-y: visible;
        }
        #colab {
          height: 120vh;
          overflow-y: visible;
          /* overflow: hidden; */
        }
        #blog {
          height: 100vh;
        }
      }
      @media screen and (max-width: 414px) {
        #home {
          height: auto;
        }
        #about {
          height: 120vh;
        }
        #tap-list {
          height: 220vh;
          overflow: hidden;
        }
        #events {
          height: 150vh;
        }
        #blog {
          height: 140vh;
        }
        #brews {
          height: 160vh;
        }
        #historic {
          height: 135vh;
        }
        #colab {
          height: 160vh;
        }
      }
      @media screen and (max-width: 375px) {
        #about {
          height: 140vh;
        }
        #tap-list {
          height: 230vh;
        }
        #blog {
          height: 160vh;
        }
        #brews {
          height: 190vh;
        }
        #colab {
          height: 200vh;
        }
      }
    `}</style>
  </section>
);

export default Section;
