import React, {useEffect, useState} from "react"
import dotenv from "dotenv"
import Recipe from "./components/Recipe"
import './App.css';

dotenv.config();

function App() {

    const app_id = process.env.REACT_APP_API_ID
   const api_key = process.env.REACT_APP_API_KEY

   
  

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

    useEffect( () => {
      const getRecipes = async()=>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${api_key}`)        
        const data = await response.json();
        console.log(data);
        setRecipes(data.hits)
      }
      getRecipes();
    }, [query,app_id,api_key])

    function updateSearch(e) {
      setSearch(e.target.value)
      
    }

    function getSearch(e) {
      e.preventDefault();
      setQuery(search)
      setSearch("")
    }
    

    
  return (
    <div className="App">
    
      <form className = "search-form" onSubmit = {getSearch}>
        <input className ="search-bar" type = "text" value = {search} onChange = {updateSearch}/>
        <button className = "search-button" type = "submit"  >
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => 
      <Recipe 
      key = {recipe.recipe.label}
      title = {recipe.recipe.label} 
      calories = {recipe.recipe.calories}  
      image = {recipe.recipe.image}
      ingredients = {recipe.recipe.ingredients}

      />)}
      </div>
    </div>
  );
}

export default App;