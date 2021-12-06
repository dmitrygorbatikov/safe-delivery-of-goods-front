import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import {Card, CardContent, Grid} from "@mui/material";
import {createdDate} from "../../helpers/functions";

export default function ViewGoodsDialog(props: any) {
    const {goods} = props
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                View goods
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
            >
                <AppBar sx={{position: 'relative'}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>
                        <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">

                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            OK
                        </Button>
                    </Toolbar>
                </AppBar>
                {
                    goods && goods.length > 0 &&
                    <Grid container spacing={2}>
                        {goods.map((item: any, index: number) => {
                            return (
                                <Grid item xs={2}>
                                    <div style={{display: 'flex'}}>
                                        <Card sx={{minWidth: 275}}>
                                            <CardContent>
                                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                                    <strong>Title:</strong> {item.title}
                                                </Typography>
                                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                                    <strong>Weight:</strong> {item.weight}
                                                </Typography>
                                                <Typography sx={{mb: 1.5}} color="text.secondary">
                                                    <strong>Created date:</strong> {createdDate(item.registerDate)}
                                                </Typography>
                                                <Typography sx={{mb: 1.5}} color="text.secondary">
                                                    <strong>StorageId:</strong> {item.storageId}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </Grid>
                            )
                        })}
                    </Grid>
                }
            </Dialog>
        </div>
    )
        ;
}
