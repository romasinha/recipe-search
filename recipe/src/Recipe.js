import React from 'react'

const Recipe = ({title, calories, image, ingredients}) =>{
    return(
        <div className= "recipe">
            <h1 className= "title">{title}</h1>
            
            <ul className = "list">
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img src = {image}></img>
            <p><span> Calories : </span>{calories}</p>
            
            
        </div>
    )
}

export default Recipe;