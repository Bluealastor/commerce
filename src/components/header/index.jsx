import { useState } from "react";


export const Header = (props) => {
  const [search, setSearch] = useState("");

  const changing = (event) => {
    const value = event.target.value;
    setSearch(value);
    props.searching(value);
  };

  return (
    <header className="bg-green-600 relative  ">
    <h1 className="text-3xl font-bold">EdEcommerce</h1>
      <img className="w-24 aspect-square" src="https://images.corsidia.com/ckeditor/pictures/data/000/000/086/content/immagini-e-tabelle-html-00.jpg" alt="EdEcommerce" />
      <form>
        <input className="absolute top-0 right-0 h-8 w-22"
          value={search}
          onChange={changing}
          type="text"
          placeholder="Search..."
        />
      </form>
    </header>
  );
};
