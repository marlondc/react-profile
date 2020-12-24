import React, { Component } from "react";
import H1 from "../H1";
import Copy from "../Copy";
import Background from "../Background";

import "./index.scss";

class Home extends Component {
  render() {
    return (
      <Background>
        <div className="Home">
          <H1>marlon dc</H1>
          <div className="spacing--2" />
          <Copy>Javascript Developer based in Toronto</Copy>
        </div>
      </Background>
    );
  }
}

export default Home;
