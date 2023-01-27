import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import "./App.css";
import List from "./List/List";
function App() {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    api.get().then((res) => {
      setList(res.data);
    });
  }, [searchText]);

  const clearSearch = () => {
    inputRef.current.value = "";
  };

  const filterList = (e) => {
    const newList = list.filter((item) => {
      return item.title.includes(e);
    });
    setList(newList);
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          value={searchText}
          ref={inputRef}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="input"
        />
        <button
          onClick={() => {
            filterList(searchText);
          }}
          style={{ marginLeft: 4 }}
          value={searchText}
        >
          Search
        </button>
        <button style={{ marginLeft: 4 }} onClick={clearSearch}>
          Clear Search
        </button>
      </div>
      {list.length > 0 ? (
        <div>
          {list.map((item) => {
            return <List item={item} key={item.id} />;
          })}
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>No List Found</h1>
      )}
    </div>
  );
}

export default App;

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});
