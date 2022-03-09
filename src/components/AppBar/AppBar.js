import React, { useState } from "react";
import ToggleSwitch from "../../UI/ToggleSwitch";
import classes from "./AppBar.module.scss";
import Dashboard from "./../../asset/Dashboard.svg";
import Customers from "./../../asset/Customers.png";
import Earnings from "./../../asset/Earnings.png";
import ProductSales from "./../../asset/ProductSales.svg";
import StoreManagement from "./../../asset/StoreManagement.png";
import Setting-gear from "./../../asset/Setting-gear.svg";

const initialNavList = [
  {
    id: 0,
    text: "Dashboard",
    isActive: true,
    icon: (fillColor) => <Dashboard fillColor={fillColor} />,
  },
  {
    id: 1,
    text: "Customers",
    isActive: false,
    icon: (fillColor) => <Customers fillColor={fillColor} />,
  },
  {
    id: 2,
    text: "Earning",
    isActive: false,
    icon: (fillColor) => <Earnings fillColor={fillColor} />,
  },
  {
    id: 3,
    text: "Product Sales",
    isActive: false,
    icon: (fillColor) => <ProductSales fillColor={fillColor} />,
  },
  {
    id: 4,
    text: "Store Management",
    isActive: false,
    icon: (fillColor) => <StoreManagement fillColor={fillColor} />,
  },
  {
    id: 5,
    text: "Setting",
    isActive: false,
    icon: (fillColor) => <Setting fillColor={fillColor} />,
  },
];

const AppBar = () => {
  const [navList, setNavList] = useState(initialNavList);

  const isActiveHandler = (id) => {
    const arr = [...navList];
    const inxOfActive = arr.find((item) => item.isActive === true).id;
    arr[inxOfActive].isActive = false;
    arr[id].isActive = true;
    setNavList(arr);
  };

  return (
    <div className={classes.appbar__container}>
      <div className={classes.appbar}>
        <div className={classes.appbar__logo}>
          <div className={classes.appbar__logo__rect}></div>
          <h1 className={classes.appbar__logo__title}>
            Me <span>Store</span>
          </h1>
        </div>
        <ul className={classes.appbar__menu}>
          {initialNavList.map(({ id, text, isActive, icon }) => (
            <li key={id} className={isActive ? classes.isActive : ""}>
              <a
                href={`#${text}`}
                className={classes.link}
                onClick={() => isActiveHandler(id)}
              >
                <div className={classes.link__icon}>
                  {icon(isActive ? "#33c863" : "#929292")}
                </div>
                <span className={classes.link__text}>{text}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className={classes.appbar__divider} />
        <div className={classes.appbar__themetoggler}>
          <ToggleSwitch />
          <span className={classes.toggle__title}>Night Mode</span>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
