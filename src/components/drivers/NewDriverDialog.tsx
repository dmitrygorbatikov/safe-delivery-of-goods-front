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
import {driversSelector} from "../../modules/drivers/selectors";
import {postDriverItem} from "../../modules/drivers/actions";

const NewDriverDialog = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const drivers = useSelector(driversSelector)
    const dispatch = useDispatch()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const createDriver = () => {
        if (name !== '' && surname !== '' && email !== '' && password !== '') {
            dispatch(postDriverItem({drivers, name, surname, email, password}))
            setOpen(false);
        }
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                + New driver
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create new driver</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{color: 'red'}}>
                        Fields not must be empty *
                    </DialogContentText>
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoFocus={false}
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        autoFocus={false}
                        margin="dense"
                        id="name"
                        label="Surname"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus={false}
                        margin="dense"
                        id="name"
                        label="Email"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoFocus={false}
                        margin="dense"
                        id="name"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error" variant="contained">Cancel</Button>
                    <Button onClick={createDriver} color="success" variant="contained">Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default NewDriverDialog