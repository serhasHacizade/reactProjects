import React, { useState } from 'react';
import classes from "./Available.module.css";
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect } from 'react';


const Available = () => {
    const  [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchMeals = async() => {

            const response = await fetch("https://meals-a0525-default-rtdb.firebaseio.com/meals.json")
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            
            const loadedMeals = [];
            for ( const key in data) {
                loadedMeals.push({
                    id : key,
                    name : data[key].name,
                    description : data[key].description,
                    price : data[key].price
                });
            };
            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals().catch(error => {
            setIsLoading(false);
            setError(error.message);
        });
    }, []);

    if (isLoading) {
        return (
            <section className={classes.mealsLoading}>
                <h1>Loading...</h1>
            </section>
        );
    }

    if (error) {
      return (
        <section className={classes.mealsError}>
                <h1>{error}</h1>
            </section>
      );
    };

    const mealsList = meals.map(meal => 
    <MealItem key={meal.id} id={meal.id}
    name={meal.name} description={meal.description} 
    price={meal.price} />);
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default Available;