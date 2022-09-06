import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {filterByCategory} from "../api";
import {Preloader} from "../components/Preloader";
import {MealList} from "../components/MealList";
import {Button, Grid, Typography} from "@mui/material";

function Category() {
    const {name} = useParams();

    const [meals, setMeals] = useState([]);

    const back = useNavigate();

    useEffect(() => {
        filterByCategory(name).then(data => setMeals(data.meals));
    }, [name]);

    return <>
        <Grid container spacing={2}>
            <Grid item xs={12} md={10} >
                <Typography gutterBottom variant="h4" component="div">
                    Recipes in the "{name}" category
                </Typography>
            </Grid>
            <Grid item xs={6} md={2} sx={{marginBottom: '.3rem'}}>
                <Button variant="outlined" onClick={() => back(-1)}>
                    Go back
                </Button>
            </Grid>
        </Grid>
        {meals && !meals.length ? <Preloader/> : (
            <><MealList meals={meals}/>
                <Button sx={{marginBottom: '0.3rem', marginTop: '0.3rem'}} variant="outlined" onClick={() => back(-1)}>
                    Go back
                </Button>
            </>
        )}
    </>
}

export {Category};