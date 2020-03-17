const About = () => (
  <div>
    <img src="https://source.unsplash.com/random/270x250" />
    <h3>In the wilderness there is Cognition</h3>
    <div className="text-blocks">
      <p>
        Cognition Brewing Company is the newest addition to the growing craft
        beer scene here in Michigan’s Upper Peninsula. We are located right in
        the heart of the U.P. where the winters are long but enjoyed. We are
        proud to be located in an area that has such strong appreciation for
        community and locally made products. It only makes sense that the people
        that live here have strong work ethics and aren’t afraid to help one
        another out because that is what it takes to get by up here.
      </p>
      <p>
        It has been a long journey for us at Cognition Brewing Company and we
        are really excited to be bringing you a product that we have worked hard
        to produce. Whether you come visit us at the tap room or find our beer
        on tap somewhere else, we truly hope that you enjoy it to the fullest.
        Our beers are brewed in small batches in our humble 7 barrel brewery
        that is located in the historic Mather Inn.
      </p>
      <p>
        We want our beer to be more than just a beverage. We hope that when you
        sit down to a pint, you do so in great company and experience the beer
        to every degree.
      </p>
      <p>
        Right <br /> what's on tap
      </p>
    </div>
    <hr />
    <h2>About</h2>
    <style jsx>{`
      div {
        width: 100%;
        /* margin: 0 auto;
        padding: 0 2em;
        white-space: normal;*/
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-auto-rows: auto;
        grid-gap: 1em;
        background-color: #a73a3a;
      }
      img {
        padding-top: 2em;
        height: 250px;
        width: auto;
        grid-column: 2 / 5;
        /* grid-column-end: 5; */
      }
      h3 {
        margin: 0;
        grid-column: 2 / 7;
        /* grid-column-end: 7; */
        grid-row-start: 2;
        color: #ffffff;
        font-size: 60px;
      }
      .text-blocks {
        padding-top: 2em;
        grid-row: 1 / 3;
        grid-column-start: 8;
        grid-column-end: 12;
        display: flex;
        flex-direction: column;
      }

      p {
        display: inline-block;
        font-size: 16px;
        font-weight: 300;
        margin-top: 0;
        color: #fff;
      }
      p:last-child {
        color: #000000;
      }
      hr {
        grid-column: 2 / 7;
        border: 1px solid #fff;
        width: 665px;
      }
      h2 {
        font-size: 260px;
        line-height: 165px;
        color: black;
        grid-column: 2 / 6;
        margin: 0 auto;
        /* grid-column-end: 5; */
        /* grid-row-start: 4; */
      }

      @media screen and (max-width: 1280px) {
        p {
          font-size: 14px;
        }

        h2 {
          font-size: 200px;
        }
        h3 {
          font-size: 50px;
        }
        img {
          height: 220px;
        }
      }
    `}</style>
  </div>
);

export default About;
