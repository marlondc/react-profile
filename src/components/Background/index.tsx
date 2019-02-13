import React, { ReactNode} from "react";

import "./index.scss";

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.SFC<BackgroundProps> = ({ children }) => {
  return <div className="background">{children}</div>;
};

export default Background;
