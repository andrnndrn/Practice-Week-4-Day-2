import React, { Component } from "react";
import { fetchGameDetail } from "../utils/api";
import NewsDetail from "../components/NewsDetail";

export default class NewsDetailContainer extends Component {
  state = {
    detail: null,
    loading: true,
  };

  componentDidMount() {
    this.fetcheDetailData();
  }

  async fetcheDetailData() {
    try {
      const data = await fetchGameDetail(this.props.newsKey);
      this.setState({ detail: data.results, loading: false });
    } catch (err) {
      console.error(err);
      this.setState({ loading: false });
    }
  }
  render() {
    return (
      <div className="detail">
        <h1 className="portal">Game News Portal</h1>
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
            <NewsDetail detail={this.state.detail} onBack={this.props.onBack} />
        )}
      </div>
    );
  }
}
