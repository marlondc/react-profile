import React, { Component } from "react";
import H1 from "../H1";
import Copy from "../Copy";
import Background from "../Background";

import "./index.scss";

class App extends Component {
  render() {
    return (
      <Background>
        <div className="App">
          <H1>marlon dc</H1>
          <div className="spacing--2" />
          <Copy>Javscript Developer based in Toronto</Copy>
        </div>
      </Background>
    );
  }
}

export default App;
