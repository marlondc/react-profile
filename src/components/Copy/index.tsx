import React from "react";

import "./index.scss";

interface HeaderProps {
  children: string;
}
const Header: React.SFC<HeaderProps> = ({ children }) => (
  <p className="copy">{children}</p>
);

export default Header;
