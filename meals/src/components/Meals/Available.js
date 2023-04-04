import React from 'react';
import classes from "./Available.module.css";
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const meals = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];
const Available = () => {
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