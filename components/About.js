const About = () => (
  <div>
    <img src="https://source.unsplash.com/random/270x250" />
    <h2>In the wilderness there is Cognition</h2>
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
    </div>
    {/* <hr /> */}
    <span>About</span>
    <style jsx>{`
      div {
        width: 100%;
        /* margin: 0 auto;
        padding: 0 2em;
        white-space: normal;*/
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 1em;
        background-color: #a73a3a;
      }
      img {
        padding-top: 2em;
        height: 250px;
        width: 270px;
        grid-column-start: 2;
        grid-column-end: 5;
      }
      h2 {
        margin: 0;
        grid-column-start: 2;
        grid-column-end: 7;
        grid-row-start: 2;
        color: #ffffff;
        font-size: 60px;
      }
      .text-blocks {
        padding-top: 2em;
        grid-row-start: 1;
        grid-row-end: 5;
        grid-column-start: 8;
        grid-column-end: 11;
        display: flex;
        flex-direction: column;
      }

      p {
        display: inline-block;
      }
      /* hr {
        grid-column: span 10;
        border: 1px solid black;
        width: 665px;
      } */
      span {
        font-size: 260px;
        color: black;
        grid-column-start: 2;
        grid-column-end: 5;
        grid-row-start: 8;
      }
    `}</style>
  </div>
);

export default About;
