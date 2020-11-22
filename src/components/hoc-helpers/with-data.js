import React, { Component } from "react";
// import ListItem from "../list-item";
import Spinner from "../spinner";

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
    };

    componentDidMount() {
      getData().then((data) => {
        this.setState({
          data,
        });
      });
    }
    onItemSelected = (id) => {
      console.log(id);
      this.setState({
        selectedItem: id,
      });
    };
    render() {
      const { data } = this.state;
      if (!data) {
        return <Spinner />;
      }
      return (
        <View
          {...this.props}
          data={data}
          onItemSelected={this.onItemSelected}
        />
      );
    }
  };
};

export default withData;
