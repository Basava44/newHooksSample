import React from "react";

const List = ({ item }) => {
  const style = {
    border: "2px solid black",
    padding: "4px",
    margin: "4px",
  };

  return (
    <div style={style}>
      <div>Id: {item.id}</div>
      <div>Title: {item.title}</div>
      {item.completed ? "Task is Completed" : "Task is InCompleted"}
    </div>
  );
};

export default List;
