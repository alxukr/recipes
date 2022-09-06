import {Box, LinearProgress} from "@mui/material";

function Preloader() {
    return <Box sx={{ width: '100%' }}>
        <LinearProgress />
    </Box>
}

export {Preloader};