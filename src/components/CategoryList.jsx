import {CategoryItem} from "./CategoryItem";
import {Grid, Typography} from "@mui/material";

function CategoryList(props) {
    const {catalog = []} = props;
    return <>
        <Typography gutterBottom variant="h4" component="div">
            Food recipe categories
        </Typography>
        <Grid container spacing={3}>
        {catalog.map(el => (

            <CategoryItem key={el.idCategory} item={el}/>
        ))}
    </Grid>
        </>
}

export {CategoryList};