import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  console.log(`i render first`);
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
