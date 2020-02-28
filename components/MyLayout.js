import Header from "./Header";
import Carousel from "./Carousel";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Carousel />
  </div>
);

export default Layout;
