import {useParams} from "react-router";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStorageItem, storagesIOTResponse} from "../modules/storages/actions";
import {
    getStorageItemLoadingSelector,
    storageItemSelector, storagesIotSelector
} from "../modules/storages/selectors";
import {Box, Card, LinearProgress, Typography} from "@mui/material";
import MenuDrawer from "../components/home/MenuDrawer";
import {getManagerProfile} from "../modules/manager/actions";
import {createdDate, getRandomCarsIot, getRandomStoragesIot, normalizeCarsData} from "../helpers/functions";
import TableCars from "../components/cars/Table";
import {carsIOTResponse, getStorageCars} from "../modules/cars/actions";
import {getStorageCarLoadingSelector, storageCarsSelector} from "../modules/cars/selectors";
import {getStorageProducts} from "../modules/products/actions";
import {
    getStorageProductsLoadingSelector,
    storageProductsSelector
} from "../modules/products/selectors";
import TableProducts from "../components/products/ProductsTable";
import {getStorageDrivers} from "../modules/drivers/actions";
import {getStorageDriverLoadingSelector, storageDriversSelector} from "../modules/drivers/selectors";
import TableDrivers from "../components/drivers/DriversTable";

const DetailStoragePage = () => {
    const {id} = useParams<{ id: string }>()
    const dispatch = useDispatch()
    const storage = useSelector(storageItemSelector)
    const cars = useSelector(storageCarsSelector)
    const products = useSelector(storageProductsSelector)
    const drivers = useSelector(storageDriversSelector)
    const storageLoading = useSelector(getStorageItemLoadingSelector)
    const storagesIot = useSelector(storagesIotSelector)

    const carsLoading = useSelector(getStorageCarLoadingSelector)
    const productsLoading = useSelector(getStorageProductsLoadingSelector)
    const driversLoading = useSelector(getStorageDriverLoadingSelector)
    useEffect(() => {
        dispatch(getStorageItem(id))
        dispatch(getStorageProducts(id))
        dispatch(getStorageCars(id))
        dispatch(getManagerProfile())
        dispatch(getStorageDrivers(id))
        setInterval(() => {
            dispatch(storagesIOTResponse(getRandomStoragesIot()))
        }, 2500)
    }, [])
    const carsRows = normalizeCarsData(cars)
    const carsHeaders = ['Number', 'Model', 'Carrying capacity', 'Price', 'Condition', 'Status', 'Register date', 'Edit']
    const productsHeaders = ['Title', 'Weight', 'Storage', 'Car', 'Register date', 'Edit' ]
    const driversHeaders = ['Name', 'Surname', 'Email', 'Register date', 'Edit' ]

    if (storageLoading || carsLoading || productsLoading ||driversLoading) {
        return (
            <Box sx={{width: '100%'}}>
                <LinearProgress/>
            </Box>
        )
    }
    return (
        <div className="detail-storage">
            {!storageLoading && !carsLoading && !productsLoading && !driversLoading && (
                <>
                    <div className="home__navigation" style={{padding: 20}}>
                        <Card style={{padding: 15, height: '90vh'}}>
                            <Typography variant="h4">Storage: {storage?.title}</Typography>
                            <Typography variant="h4">Address: {storage?.address}</Typography>
                            <Typography variant="h4">Created date: {createdDate(storage?.registerDate)}</Typography>
                            <Typography variant="h4">Latitude: {storage?.latitude}</Typography>
                            <Typography variant="h4">Longitude: {storage?.longitude}</Typography>
                            <Typography style={{color: `${storagesIot.temperature > 21 && storagesIot.temperature < 30 ? 'orange'
                                    : storagesIot.temperature < 21 ? 'green': 'red'}`}}
                                variant="h4">Temperature: {storagesIot.temperature}</Typography>
                            <Typography
                                style={{color: `${storagesIot.humidity > 80 && storagesIot.humidity < 100 ? 'orange'
                                        : storagesIot.humidity < 80 ? 'green': 'red'}`}}
                                variant="h4">Humidity: {storagesIot.humidity}</Typography>
                            <Typography variant="h4">Measurement
                                date: {storagesIot.measurementDate}</Typography>
                        </Card>
                        <div style={{display: 'block', width: '100%', marginRight: 30}}>
                            <Card style={{width: '100%', marginLeft: 10, padding: 10}}>
                                <Typography variant="h3">Cars</Typography>
                                <TableCars rows={carsRows} headers={carsHeaders}/>
                            </Card>
                            <Card style={{width: '100%', marginLeft: 10, marginRight: 30, padding: 10, marginTop: 20}}>
                                <Typography variant="h3">Products</Typography>
                                <TableProducts rows={products} headers={productsHeaders}/>
                            </Card>
                            <Card style={{width: '100%', marginLeft: 10, marginRight: 30, padding: 10, marginTop: 20}}>
                                <Typography variant="h3">Drivers</Typography>
                                <TableDrivers rows={drivers} headers={driversHeaders}/>
                            </Card>
                        </div>
                        <div>
                            <MenuDrawer/>
                        </div>
                    </div>
                </>
            )
            }
        </div>
    )
}
export default DetailStoragePage