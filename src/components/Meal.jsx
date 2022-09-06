import {useNavigate} from "react-router-dom";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

function Meal(props) {
    const {strMeal, strMealThumb, idMeal} = props;
    const navigate = useNavigate();

    return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <CardMedia
                        component="img"
                        image={strMealThumb}
                        alt={strMeal}
                    />
                    <CardContent sx={{flexGrow: '1'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {strMeal}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" fullWidth={true} onClick={() => navigate(`/recipe/${idMeal}`)}>
                            Watch recipe
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
}

export {Meal};