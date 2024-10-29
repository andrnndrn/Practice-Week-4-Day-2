import React, { Component } from "react";
import NewsList from "../components/NewsList";
import { fetchGame } from "../utils/api";

class NewsListContainer extends Component {
  state = {
    news: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchNewsData();
  }

  async fetchNewsData() {
    try {
      const data = await fetchGame();
      console.log(data);
      this.setState({ news: data, loading: false });
    } catch (err) {
      console.error(err);
      this.setState({ loading: false });
    }
  }

  render() {
    const { news, loading } = this.state; //destructuring object
    return (
      <div className="list">
        <h1>List Container</h1>
        {loading ? <h1>Loading...</h1> : <NewsList news={news} onSelect={this.props.onSelect} />}
      </div>
    );
  }
}

export default NewsListContainer;
