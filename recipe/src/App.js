import React, {useEffect, useState} from 'react';

import './App.css';

const App = () =>{
  const APP_ID = "97b69e7f";
  const APP_KEYS = "bdf2d2f2eff5aa1a0f4d0a86af294da4"

  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEYS}`);
    const data = await response.json();
    setRecipes(data.hits);
  }
  
  
  return(
    <div className = "App">
      <form className = "search-form">
        <input className = "search-bar" type  = "text"></input>
        <button className = "search-button">Submit</button>
      </form>
    </div>
  )
}

export default App;
