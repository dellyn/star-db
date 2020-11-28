import React, { Component } from "react";
import Spinner from "../spinner";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      selectedItem: 2,
    };

    componentDidMount() {
      this.props.getData().then((data) => {
        this.setState({
          data,
        });
      });
    }
    onItemSelected = (id) => {
      this.setState({
        selectedItem: id,
      });
    };
    render() {
      const { data, selectedItem } = this.state;
      if (!data) {
        return <Spinner />;
      }
      return (
        <View
          {...this.props}
          data={data}
          onItemSelected={this.onItemSelected}
          selectedItem={selectedItem}
        />
      );
    }
  };
};

export default withData;
