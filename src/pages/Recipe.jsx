import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMealById} from "../api";
import {Preloader} from "../components/Preloader";
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid, Paper, styled,
    Table, TableBody, TableCell, tableCellClasses,
    TableContainer, TableHead, TableRow,
    Typography
} from "@mui/material";

function Recipe() {

    const {id} = useParams();

    const [recipe, setRecipe] = useState({});

    const back = useNavigate();

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]));
        console.log(recipe)
    }, [id])

    return (
        <>
            {!recipe.idMeal ? (
                <>
                    <Button sx={{marginBottom: '0.3rem'}} variant="outlined" onClick={() => back(-1)}>
                        Go back
                    </Button>
                    <Preloader/>
                </>) : (
                <>
                    <Grid container spacing={2}>
                        {}
                        <Grid item xs={12} md={10}>
                            <Typography gutterBottom variant="h4" component="div">
                                {recipe.strMeal}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={2} sx={{marginBottom: '.3rem'}}>
                            <Button sx={{marginBottom: '0.3rem'}} variant="outlined" onClick={() => back(-1)}>
                                Go back
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <CardMedia
                                component="img"
                                image={recipe.strMealThumb}
                                alt={recipe.strMeal}
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{color: '#ffffff'}}>
                                {recipe.strMeal}
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{color: '#f9a825'}}>
                                category : {recipe.strCategory}
                            </Typography>
                            {recipe.strArea ?
                                <Typography variant="h6" gutterBottom sx={{color: '#e65100'}}>
                                    area : {recipe.strArea}
                                </Typography>
                                : null}
                            <p style={{color: '#dfdfdf'}}>{recipe.strInstructions}</p>
                            </CardContent>
                        </Grid>
                    </Grid>


                    <TableContainer component={Paper} sx={{minWidth: '250px', width: '90%', margin: '5%'}}>
                                    <Table aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell align="center">Ingredient</StyledTableCell>
                                                <StyledTableCell align="center">Measure</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                Object.keys(recipe).map(key => {
                                                    if (key.includes('Ingredient') && recipe[key]) {
                                                        return <StyledTableRow key={key}>
                                                            <StyledTableCell align="center" component="th" scope="row">
                                                                {recipe[key]}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="center">{
                                                                recipe[`strMeasure${key.slice(13)}`]
                                                            }</StyledTableCell>
                                                        </StyledTableRow>
                                                    }
                                                    return null
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>



                            {recipe.strYoutube ? (
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={3}>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Typography gutterBottom variant="h5" component="div" sx={{color: '#ffffff'}}>
                                                Video Recipe
                                            </Typography>
                                            <div style={{height: '0', position: 'relative', paddingBottom: '56.25%'}}>
                                                    <iframe title={id} style={{width: '100%', position: 'absolute',
                                                left: '0', top: '0', height: '100%'}}
                                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                        </Grid>
                                    </Grid>
                            ) : null}

                    <Button sx={{marginBottom: '0.3rem', marginTop: '1rem'}} variant="outlined"
                            onClick={() => back(-1)}>
                        Go back
                    </Button>
                </>
            )}
        </>
    )
}

export {Recipe};