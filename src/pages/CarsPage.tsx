import {Box, Card, LinearProgress, Typography} from "@mui/material";
import MenuDrawer from "../components/home/MenuDrawer";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getManagerProfile} from "../modules/manager/actions";
import {normalizeCarsData} from "../helpers/functions";
import {carsSelector, getCarsLoadingSelector} from "../modules/cars/selectors";
import {getCars} from "../modules/cars/actions";
import TableCars from "../components/cars/Table";
import {CarsFilters} from "../components/cars/Filters";
import NewCarDialog from "../components/cars/NewCarDialog";

export const CarsPage =() => {
    const dispatch = useDispatch()
    const cars = useSelector(carsSelector)
    const loading = useSelector(getCarsLoadingSelector)
    useEffect(() => {
        dispatch(getCars({}))
        dispatch(getManagerProfile())
    },[])
    const rows = normalizeCarsData(cars)
    const headers = ['Number', 'Model', 'Carrying capacity', 'Price', 'Condition', 'Status', 'Register date', 'Edit' ]
    if (loading) {
        return (
            <Box sx={{width: '100%'}}>
                <LinearProgress/>
            </Box>
        )
    }
    return (
        <div className="home">
            <div className="home__navigation">
                <div style={{marginLeft: 10}}><Typography variant="h4">Cars</Typography></div>
                <div><MenuDrawer/></div>
            </div>
            <div className="home__navigation">
                <div style={{marginLeft: 10}}><CarsFilters/></div>
                <div><NewCarDialog/></div>
            </div>
            <Card className="home__table">
                <TableCars rows={rows} headers={headers}/>
            </Card>
        </div>
    )
}
export default CarsPage