import {Meal} from "./Meal";
import {Grid} from "@mui/material";

function MealList({meals}) {
    return <>
        <Grid container spacing={3}>
            {meals.map(meal => (
                <Meal key={meal.idMeal} {...meal}/>
            ))}
        </Grid>
    </>
}

export {MealList};