import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header />

      <div className=" py-20 min-h-screen">{props.children}</div>

      <Footer />
    </>
  );
};

export default Layout;
