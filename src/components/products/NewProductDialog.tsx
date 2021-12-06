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
import {getStoragesLoadingSelector, storagesSelector} from "../../modules/storages/selectors";
import {getStorages, storagesResponse} from "../../modules/storages/actions";
import {postProductItem} from "../../modules/products/actions";
import {productsSelector} from "../../modules/products/selectors";

const NewProductDialog = () => {
    const [open, setOpen] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false)
    const [title, setTitle] = useState('')
    const [weight, setWeight] = useState('')
    const storages = useSelector(storagesSelector)
    const [storage, setStorage] = useState()
    const storagesLoading = useSelector(getStoragesLoadingSelector)
    const storagesClick = () => {
        dispatch(getStorages({}))
        setOpenDropDown(true)
    }
    const products = useSelector(productsSelector)
    const dispatch = useDispatch()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const createProduct = () => {
        if (title !== '' && weight !== '' && storage) {
            dispatch(postProductItem({
                products,
                title,
                weight: parseFloat(weight),
                // @ts-ignore
                storageId: storage._id,
            }))
            setOpen(false);
        }
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                + New product
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new car</DialogTitle>
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
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        autoFocus={false}
                        margin="dense"
                        id="name"
                        label="Weight"
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error" variant="contained">Cancel</Button>
                    <Button onClick={createProduct} color="success" variant="contained">Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default NewProductDialog