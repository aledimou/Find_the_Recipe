import React from 'react'
import styles from './Recipe.module.css'

function Recipe({title, calories, image, ingredients}) {
    return (
        <div className ={styles.Recipe}>
            <h1>{title}</h1>
            <h3>Calories:</h3><p className={styles.caloriesInfo}>{calories}</p>
            <img src = {image}alt ={title} ></img>
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map(ingredient => (
                    <li className={styles.ingredientsList}>{ingredient.text}</li>
                    
                ))}
            </ul>
        </div>
    )
}

export default Recipe