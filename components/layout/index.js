import Header from "next/head";
import Navigation from "../navigation";

function Layout({ children }) {
  return (
    <>
      <Header>
        <title>SaSS Landing Page</title>
      </Header>

      <Navigation />

      <main className="mt-28 sm:pt-20">{children}</main>
    </>
  );
}

export default Layout;
