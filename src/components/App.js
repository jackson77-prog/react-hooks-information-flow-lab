// App.js
import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import Filter from "./Filter";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <Header onDarkModeClick={toggleDarkMode} />
      <ShoppingList items={itemData} selectedCategory={selectedCategory} />
      <Filter onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;
