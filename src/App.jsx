import React, { Component } from "react";
import NewsDetailContainer from "./containers/NewsDetailContainer";
import NewsListContainer from "./containers/NewsListContainer";

export default class App extends Component {
  state = {
    selectedNewsKey: null,
  };

  handleSelectedNews = (key) => {
    this.setState({ selectedNewsKey: key });
  };

  handleBack = () => {
    console.log("back");
    this.setState({ selectedNewsKey: null });
  };

  render() {
    return (
      <div className="App">
        {this.state.selectedNewsKey ? (
          <NewsDetailContainer
            newsKey={this.state.selectedNewsKey}
            onBack={this.handleBack}
          />
        ) : (
          <NewsListContainer onSelect={this.handleSelectedNews} />
        )}
      </div>
    );
  }
}
