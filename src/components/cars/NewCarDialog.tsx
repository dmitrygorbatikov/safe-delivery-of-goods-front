import React, {useState} from "react";
import {
    Autocomplete,
    Button, CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {carsSelector} from "../../modules/cars/selectors";
import {postCarItem} from "../../modules/cars/actions";
import {getStoragesLoadingSelector, storagesSelector} from "../../modules/storages/selectors";
import {getStorages, storagesResponse} from "../../modules/storages/actions";
import {driversResponse, getDrivers} from "../../modules/drivers/actions";
import {driversSelector, getDriversLoadingSelector} from "../../modules/drivers/selectors";

const NewCarDialog = () => {
    const [open, setOpen] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false)
    const [openDriverDropDown, setOpenDriverDropDown] = useState(false)
    const [carryingCapacity, setCarryingCapacity] = useState('')
    const [model, setModel] = useState('')
    const [number, setNumber] = useState('')
    const [price, setPrice] = useState('')
    const storages = useSelector(storagesSelector)
    const drivers = useSelector(driversSelector)
    const [storage, setStorage] = useState()
    const storagesLoading = useSelector(getStoragesLoadingSelector)
    const driverLoading = useSelector(getDriversLoadingSelector)

    const [driver, setDriver] = useState()
    const storagesClick = () => {
        dispatch(getStorages({}))
        setOpenDropDown(true)
    }

    const driverClick = () => {
        dispatch(getDrivers({}))
        setOpenDriverDropDown(true)
    }
    const cars = useSelector(carsSelector)
    const dispatch = useDispatch()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const createCar = () => {
        if (carryingCapacity !== '' && model !== '' && number !== '' && price !== '' && storage && driver) {
            dispatch(postCarItem({
                cars,
                carryingCapacity: parseFloat(carryingCapacity),
                model,
                number,
                price: parseFloat(price),
                // @ts-ignore
                storageId: storage._id,
                // @ts-ignore
                driverId: driver._id
            }))
            setOpen(false);
        }
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                + New car
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new car</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{color: 'red'}}>
                        Fields not must be empty *
                    </DialogContentText>
                    <TextField
                        value={carryingCapacity}
                        onChange={(e) => setCarryingCapacity(e.target.value)}
                        autoFocus={false}
                        margin="dense"
                        id="name"
                        label="Carrying capacity"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        autoFocus={false}
                        margin="dense"
                        id="name"
                        label="Model"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        autoFocus={false}
                        margin="dense"
                        id="name"
                        label="Number"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        autoFocus={false}
                        margin="dense"
                        id="name"
                        label="Price"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <Autocomplete
                        style={{marginTop: 5}}
                        id="asynchronous-demo"
                        open={openDropDown}
                        onOpen={storagesClick}
                        onClose={() => {
                            dispatch(storagesResponse([]))
                            setOpenDropDown(false)
                        }}
                        // @ts-ignore
                        isOptionEqualToValue={(option, value) => option.title === value.title}
                        // @ts-ignore
                        getOptionLabel={(option) => option.title}
                        options={storages}
                        onChange={(event, newValue) => {
                            // @ts-ignore
                            setStorage(newValue);
                        }}
                        loading={storagesLoading}
                        renderInput={(params) => (
                            <TextField

                                {...params}
                                label="Storage"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {storagesLoading ? <CircularProgress color="inherit" size={20}/> : null}
                                            {params.InputProps.startAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />
                    <Autocomplete
                        style={{marginTop: 5}}
                        id="asynchronous-demo"
                        open={openDriverDropDown}
                        onOpen={driverClick}
                        onClose={() => {
                            dispatch(driversResponse([]))
                            setOpenDriverDropDown(false)
                        }}
                        // @ts-ignore
                        isOptionEqualToValue={(option, value) => option.email === value.email}
                        // @ts-ignore
                        getOptionLabel={(option) => option.email}
                        options={drivers}
                        onChange={(event, newValue) => {
                            // @ts-ignore
                            setDriver(newValue);
                        }}
                        loading={driverLoading}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Driver"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {driverLoading ? <CircularProgress color="inherit" size={20}/> : null}
                                            {params.InputProps.startAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error" variant="contained">Cancel</Button>
                    <Button onClick={createCar} color="success" variant="contained">Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default NewCarDialog