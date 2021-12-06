import React, {useEffect, useState} from "react";
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
import {carsSelector, getCarsLoadingSelector} from "../../modules/cars/selectors";
import {carsResponse, getCars} from "../../modules/cars/actions";
import {getStoragesLoadingSelector, storagesSelector} from "../../modules/storages/selectors";
import {getStorages, storagesResponse} from "../../modules/storages/actions";
import {driversResponse, getDrivers} from "../../modules/drivers/actions";
import {driversSelector, getDriversLoadingSelector} from "../../modules/drivers/selectors";
import {getProducts} from "../../modules/products/actions";
import {productsSelector} from "../../modules/products/selectors";
import {postShippingItem} from "../../modules/shipping/actions";
import {shippingSelector} from "../../modules/shipping/selectors";

const NewShippingDialog = () => {
    const [open, setOpen] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false)
    const [openDriverDropDown, setOpenDriverDropDown] = useState(false)
    const [openCarDropDown, setOpenCarDropDown] = useState(false)
    const storages = useSelector(storagesSelector)
    const drivers = useSelector(driversSelector)
    const products = useSelector(productsSelector)
    const shipping = useSelector(shippingSelector)
    const cars = useSelector(carsSelector)
    const [storage, setStorage] = useState()
    const [storageTo, setStorageTo] = useState()
    const [driver, setDriver] = useState()
    const [car, setCars] = useState()
    const [product, setProduct] = useState([])
    const storagesLoading = useSelector(getStoragesLoadingSelector)
    const driverLoading = useSelector(getDriversLoadingSelector)
    const carLoading = useSelector(getCarsLoadingSelector)

    const storagesClick = () => {
        dispatch(getStorages({}))
        setOpenDropDown(true)
    }

    const storagesToClick = () => {
        dispatch(getStorages({}))
        setOpenDropDown(true)
    }

    const driverClick = () => {
        dispatch(getDrivers({}))
        setOpenDriverDropDown(true)
    }

    const carClick = () => {
        dispatch(getCars({}))
        setOpenCarDropDown(true)
    }
    const dispatch = useDispatch()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(getProducts({}))
    }, [])

    const createShipping = () => {
        if (car && storage && storageTo && driver && product.length > 0) {
            dispatch(postShippingItem({
                shipping: shipping,
                // @ts-ignore
                carId: car._id,
                // @ts-ignore
                driverId: driver._id,
                // @ts-ignore
                storageFrom: storage._id,
                // @ts-ignore
                storageTo: storageTo._id,
                goods: product
            }))
            setOpen(false);
        }
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                + New shipping
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new car</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{color: 'red'}}>
                        Fields not must be empty *
                        <Button onClick={() => {
                            console.log(product)
                        }}>Click</Button>
                    </DialogContentText>
                    <Autocomplete
                        fullWidth
                        style={{marginTop: 5, width: 500}}
                        id="asynchronous-demo"
                        open={openCarDropDown}
                        onOpen={carClick}
                        onClose={() => {
                            dispatch(carsResponse([]))
                            setOpenCarDropDown(false)
                        }}
                        // @ts-ignore
                        isOptionEqualToValue={(option, value) => option.number.toUpperCase() === value.number.toUpperCase()}
                        // @ts-ignore
                        getOptionLabel={(option) => option.number.toUpperCase()}
                        options={cars}
                        onChange={(event, newValue) => {
                            // @ts-ignore
                            setCars(newValue);
                        }}
                        loading={carLoading}
                        renderInput={(params) => (
                            <TextField

                                {...params}
                                label="Car"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {carLoading ? <CircularProgress color="inherit" size={20}/> : null}
                                            {params.InputProps.startAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />
                    <span style={{display: 'flex'}}>
                    <Autocomplete
                        fullWidth
                        style={{marginTop: 5, marginRight: 3.5}}
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
                                label="Storage from"
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
                        fullWidth
                        style={{marginTop: 5, marginLeft: 3.5}}
                        id="asynchronous-demo"
                        open={openDropDown}
                        onOpen={storagesToClick}
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
                            setStorageTo(newValue);
                        }}
                        loading={storagesLoading}
                        renderInput={(params) => (
                            <TextField

                                {...params}
                                label="Storage to"
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
                    </span>
                    <Autocomplete
                        fullWidth
                        style={{marginTop: 5, width: 500}}
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
                    <Autocomplete
                        multiple
                        id="size-small-outlined-multi"
                        size="small"
                        onChange={(event, newValue) => {
                            // @ts-ignore
                            setProduct(newValue);
                        }}
                        options={products}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                            <TextField {...params} label="Products" placeholder="Products"/>
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error" variant="contained">Cancel</Button>
                    <Button onClick={createShipping} color="success" variant="contained">Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default NewShippingDialog