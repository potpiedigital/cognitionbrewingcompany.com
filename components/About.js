// import BigText from './Big-text';
import { Grid } from "./Grid";

const About = () => (
  <Grid backgroundColor="#a73a3a" width="100vw">
    <img src="/Logo.png" />
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
        Right <br /> Tap List
      </p>
    </div>
    <hr />
    {/* <BigText className="big-text"
    text= "About"
    /> */}
    <h2>About</h2>
    <style jsx>{`
      img {
        margin-top: 2em;
        height: 250px;
        width: auto;
        grid-column: 2 / 5;
        grid-row-start: 1;
      }
      h3 {
        grid-column: 2 / 7;
        grid-row-start: 4;
        color: #ffffff;
      }
      .text-blocks {
        margin-top: 2em;
        grid-row: 1 / 6;
        grid-column-start: 8;
        grid-column-end: 12;
        display: flex;
        flex-direction: column;
      }

      p {
        display: inline-block;
        font-weight: 300;
        margin-top: 0;
        color: #fff;
      }
      p:last-child {
        color: #000000;
        padding-top: 6vh;
      }
      hr {
        grid-column: 2 / 7;
        border: 2px solid #fff;
        grid-row-start: 6;
        width: 100%;
        margin-top: 4vh;
        height: 0;
      }

      h2 {
        font-size: 28vh;
        /* line-height: 0.5; */
        grid-column: 2 /6;
        grid-row: 6 / 9;
        overflow: hidden;
        margin: 0 auto;
        padding-top: 3rem;
      }
      /* .big-text {
        grid-column: 2 / 6;
        grid-row-start: 4;
        margin: 0 auto;
      } */

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
  </Grid>
);

export default About;
