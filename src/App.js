import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Categories from "./actions/Categories";
import Comments from "./actions/Comments";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      comments: [],
      currentCategoryId: null,
    }
  }

  componentWillMount() {
    this.setup();
  }

  async setup() {
    await this.fetchCategories();
    await this.fetchComments();
  }

  async fetchCategories() {
    const response = await Categories.findAll();
    const categories = await response.json();
    const currentCategoryId = categories.length ? categories[0].id : null;
    this.setState({ categories, currentCategoryId });
  }

  async fetchComments() {
    const response = await Comments.findByCategoryId(this.state.currentCategoryId);
    const comments = await response.json();
    this.setState({ comments });
  }

  render() {
    const { categories, comments } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Main categories={categories} comments={comments} />
      </React.Fragment>
    )
  }
}

export default App;
