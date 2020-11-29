import React from "react";
import "./list-item.scss";

const ListItem = (props) => {
  const { data, onItemSelected, children: renderLabel, selectedItem } = props;
  console.log(props);

  const items = data.map((item, idx) => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li
        className={
          selectedItem === +id ? "list-group-item selected" : "list-group-item"
        }
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });
  return <div className="app-lists-item list-group col-4">{items}</div>;
};

export default ListItem;
