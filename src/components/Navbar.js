import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartOutlined,
  UserOutlined,
  AudioOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import Navdrawer from "./Navdrawer";

function Navbar() {
  const suffix = (
    <SearchOutlined
      style={{
        color: "gray",
      }}
    />
  );
  return (
    <div className="navbar">
      <div className="container">
        <div className="navLinks rightNav">
          <h1>BrandName</h1>
        </div>
        <div className="searchcontainer">
          <Input
            className="searchBar"
            placeholder="Search product.."
            suffix={suffix}
          />
        </div>

        <div className="navLinks leftNav">
          <ul>
            <li>
              <Link to="/">
                <UserOutlined />
              </Link>
            </li>
            <li>
              <Link to="/">
                <ShoppingCartOutlined />
              </Link>
            </li>
            <Navdrawer />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
