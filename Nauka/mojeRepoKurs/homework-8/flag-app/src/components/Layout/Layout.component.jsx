import Header from "../Header/Header.component";
import { Loader } from "../Loader/Loader.component";
const Layout = ({ children, loading }) => {
  return (
    <>
      <Header />
      <Loader hidden={loading} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
