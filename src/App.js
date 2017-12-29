import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Categories from "./actions/categories";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      comments: [],
    }
  }

  componentWillMount() {
    this.setup();
  }

  async setup() {
    const response = await Categories.fetchAll();
    const categories = await response.json();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Main categories={categories} />
      </React.Fragment>
    )
  }
}

export default App;
