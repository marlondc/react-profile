import React from "react";

import "./index.scss";

interface HeaderProps {
  children: string;
}

const Header: React.SFC<HeaderProps> = ({ children }) => (
  <h1 className="header">{children}</h1>
);

export default Header;
