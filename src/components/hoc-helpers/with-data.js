import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
      error: false,
    };

    componentDidMount() {
    this.props
      .getData()
      .then((data) => {
        this.setState({ data });
      })
      .catch(() => {
        this.setState({ error: true });
      });
    }

    render() {
      const { data, error } = this.state;
      const { onItemSelected, selectedItem } = this.props;
      if (!data) {
        return <Spinner />;
      } else if (error) {
        return <ErrorIndicator />;
      }
      return (
        <View
          {...this.props}
          data={data}
          onItemSelected={onItemSelected}
          selectedItem={selectedItem}
        />
      );
    }
  };
};

export default withData;
