import {useNavigate} from "react-router-dom";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Typography} from "@mui/material";
import {useState} from "react";

function CategoryItem(props) {

    const {strCategory, strCategoryThumb, strCategoryDescription} = props.item;
    let navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        bgcolor: 'background.paper',
        border: '2px solid #e65100',
        boxShadow: 24,
        color: '#f9a825',
        p: 4,
    };

    return (
        <>
            {!open ? null : (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {strCategory}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, color: '#EEEEEE' }}>
                            {strCategoryDescription}
                        </Typography>
                    </Box>
                </Modal>
            )}

        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{
                height: '100%',
            }}>
                <CardMedia
                    component="img"
                    image={strCategoryThumb}
                    alt={strCategory}
                    sx={{width: '70%', marginLeft: "15%"}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {strCategory}
                    </Typography>
                    <Button variant="outlined" onClick={handleOpen}>Description</Button>
                </CardContent>
                <CardActions>

                    <Button variant="contained" fullWidth={true} onClick={() => navigate(`/category/${strCategory}`)}>
                            Watch category
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        </>
    )
}

export {CategoryItem};