import Header from "./Header";
import Carousel from "./Carousel";

const layoutStyle = {
  margin: 0,
  padding: 0,
  zIndex: 1
};

const Layout = props => (
  <div style={layoutStyle}>
    {/* <Header />
    {props.children} */}
    <Carousel />
  </div>
);

export default Layout;
