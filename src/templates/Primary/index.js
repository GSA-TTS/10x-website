import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import Header from "./Header";
import Footer from "./Footer";
import PrimaryNav from "components/PrimaryNav";
import Logo from "components/Logo";
import { getMenuList } from "app/MenuModule";
import Mdx from "features/Mdx";

const Primary = ({ children }) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.content.page);
  useEffect(() => {
    dispatch(getMenuList({}));
  }, [dispatch]);
  const menus = useSelector((state) => state.menu.data);
  const primary = menus.find(({ key }) => key === "primary");
  const navItems = primary ? primary.items : [];

  return (
    <div className="App">
      <Header
        className={classnames({ "bg-base-lightest": page.data.hero })}
        logo={<Logo />}
        nav={<PrimaryNav items={navItems} />}
      />
      <main role="main" id="main-content">
        {page.data.hero && (
          <div className="TxContent bg-base-lightest">
            <Mdx>{page.data.hero}</Mdx>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Primary;
