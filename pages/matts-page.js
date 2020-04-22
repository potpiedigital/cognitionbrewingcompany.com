const { random } = Math;
const randomHsl = () => `hsl(${random() * 360}, 80%, 60%)`;

const Nav = ({ children }) => (
  <nav>
    <h1>This is Matt's page</h1>
    <ul>
      {React.Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
    <style jsx>{`
      nav {
        /* 1. take it out of "page flow" */
        position: absolute;
        /* 2. make it as wide as the page is tall */
        width: 100vh;
        /* 3. from the top left corner */
        transform-origin: top left;
        /* 4. rotate 90deg counter-clockwise */
        /* 5. translate "left" 100% of its width */
        transform: rotate(-90deg) translateX(-100%);
        background-color: ${randomHsl()};
        display: flex;
      }
      h1 {
        margin: 0;
        background-color: ${randomHsl()};
      }
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        flex: 1;
      }
      li {
        display: inline-block;
        margin-left: 1em;
      }
    `}</style>
  </nav>
);

const Section = ({ id, bkgd = randomHsl(), children }) => (
  <section id={id}>
    {children}
    <style jsx>{`
      section {
        width: 100vw;
        height: 100vh;
        background-color: ${bkgd};
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 0 100%;
      }
    `}</style>
  </section>
);

const Coursel = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        display: flex;
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    `}</style>
  </div>
);

const One = () => {
  const w = Math.floor(Math.random() * 300) + 200;
  const h = Math.floor(Math.random() * 300) + 200;

  return (
    <div className="grid">
      <div className="el">A</div>
      <div className="el">
        B<img src={`https://source.unsplash.com/${w}x${h}/?cute,dog`} />
      </div>
      <div className="el">C</div>
      <div className="el">D</div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-rows: repeat(2, 1fr);
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 1em;
        }
        .el {
          position: relative;
        }
        img {
          position: absolute;
          transform: translate(200px, 0) rotate(30deg);
        }
      `}</style>
    </div>
  );
};

const CarouselContainer = () => (
  <main>
    <Nav>
      <a href="#one">one</a>
      <a href="#two">two</a>
      <a href="#three">three</a>
      <a href="#four">four</a>
      <a href="#five">five</a>
    </Nav>
    <Coursel>
      <Section id="one">
        <One />
      </Section>
      <Section id="two">two</Section>
      <Section id="three">three</Section>
      <Section id="four">four</Section>
      <Section id="five">five</Section>
    </Coursel>
    <style jsx>{`
      main {
        overflow: hidden;
      }
    `}</style>
  </main>
);

const MattsPage = () => (
  <div>
    <CarouselContainer />
    <style jsx global>{`
      html,
      body,
      #__next,
      div,
      main {
        width: 100%;
        height: 100%;
      }
      body {
        margin: 0;
      }
    `}</style>
  </div>
);

export default MattsPage;
