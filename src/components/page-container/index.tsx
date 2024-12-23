import { PropsWithChildren } from "react";
import Header from "../header";
import { Footer } from "../footer";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
