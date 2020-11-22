import React from "react";
import "./list-item.scss";

const ListItem = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;
  const items = data.map((item, idx) => {
    const { id } = item;
    // const label = renderLabel(item);
    if (idx <= 3) {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => props.onItemSelected(id)}
        >
          {item.name}
        </li>
      );
    }
  });
  return <div className="app-lists-item list-group col-4">{items}</div>;
};

export default ListItem;
