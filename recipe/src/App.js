import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () =>{
  const APP_ID = "97b69e7f";
  const APP_KEYS = "bdf2d2f2eff5aa1a0f4d0a86af294da4"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  // fetch the text input
  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  // run only after hitting button

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  
  return(
    <div className = "App">
      <form onSubmit = {getSearch} className = "search-form">
        <input onChange = {updateSearch} className = "search-bar" type  = "text" value = {search}></input>
        <button className = "search-button">Submit</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe 
        key = {recipe.recipe.title}
        title = {recipe.recipe.label}
        calories = {recipe.recipe.calories}
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}
                 />
      ))}
    </div>
  )
}

export default App;
