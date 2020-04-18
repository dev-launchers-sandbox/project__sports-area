import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Header from "./components/common/Header/Header.js";
import HomePage from "./components/pages/HomePage/HomePage.js";
import Footer from "./components/common/Footer/Footer";
import SelectionPage from "./components/pages/SelectionPage/SelectionPage.js";
import LogInPage from "./components/pages/LogInPage/LogInPage.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
    this.nextPage = this.nextPage.bind(this);
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.page === 1 && <HomePage nextPage={this.nextPage} />}
        {this.state.page === 2 && <LogInPage nextPage={this.nextPage} />}
        {this.state.page === 3 && <SelectionPage nextPage={this.nextPage} />}
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
