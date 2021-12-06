import React, {useState} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {postStorageItem} from "../../modules/storages/actions";
import {storagesSelector} from "../../modules/storages/selectors";

const NewStorageDialog = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const storages = useSelector(storagesSelector)
    const dispatch = useDispatch()
    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };

    const createStorage = () => {
        if (address !== '' && title !== '' && latitude !== '' && longitude !== '') {
            dispatch(postStorageItem({storages, address, title, latitude: parseFloat(latitude), longitude: parseFloat(longitude)}))
            setOpen(false);
        }
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                + New storage
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create new storage</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{color: 'red'}}>
                        Fields not must be empty *
                    </DialogContentText>
                    <TextField
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus={false}
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        autoFocus={false}
                        margin="dense"
                        id="name"
                        label="Address"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        autoFocus={false}
                        margin="dense"
                        id="name"
                        label="Latitude"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        autoFocus={false}
                        margin="dense"
                        id="name"
                        label="Longitude"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error" variant="contained">Cancel</Button>
                    <Button onClick={createStorage} color="success" variant="contained">Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default NewStorageDialog