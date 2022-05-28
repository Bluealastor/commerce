import { useState } from "react";

import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { List } from "./components/list/list";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("everything");

  const catSelection = (value) => {
    // console.log(value);
    setCategory(value);
  };

  const searching = (value) => {
    // console.log(value);
    setSearch(value);
  };

  return (
    <main>
      <Header searching={searching} />
      <div className="flex ">
        <Sidebar catSelection={catSelection} />
        <List  search={search} category={category} />
      </div>
    </main>
  );
}

export default App;
