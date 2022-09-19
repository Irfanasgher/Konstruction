import React, { useState } from "react";
import { Menu, Layout, Drawer, Button } from "antd";
import style from "./style.module.css";
const { Header } = Layout;
import { MenuOutlined } from "@ant-design/icons";
import MenuList from "./Menu";
const { SubMenu } = Menu;
const Navbar = () => {
  const [current, setCurrent] = useState("setting:1");
  const [visible, setVisible] = useState(false);

  let handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  let showDrawer = () => {
    setVisible(true);
  };

  let onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Header id="header" className={style.header}>
        <div className="logo">
          <a href="#">
            <img src="/images/konstruction-logo.png" height="30px" />
          </a>
        </div>
        <MenuList classN={style.horizontMenu} />
        <Button
          id="barsMenu"
          className={style.barsMenu}
          type="primary"
          onClick={showDrawer}
          icon={<MenuOutlined />}
        ></Button>
        <Drawer
          title="Menu Bar"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <MenuList />
        </Drawer>
      </Header>
    </>
  );
};

export default Navbar;
