import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/search/Search";
import CardsList from "./components/cards-list/CardsList";
import { useEffect, useState } from "react";
function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=12")
      .then((res) => res.json())
      .then((json) => setMonsters(json.users));
  }, []);

  function handleChange(e) {
   setSearchText(e.target.value)
  }

  return (

    <div className="App">
      <h1 className="text-center p-5">Monster Rolodex</h1>
      <Search
        placeholder="Search..."
        searchText={searchText}
        handleChange={handleChange}
      />
      <CardsList monsters={monsters} searchText={searchText}/>
    </div>
  );
}

export default App;
