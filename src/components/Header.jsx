import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <RestaurantIcon sx={{marginRight: '.6rem'}}/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Recipes
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export {Header};
