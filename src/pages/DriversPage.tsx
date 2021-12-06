import {Box, Card, LinearProgress, Typography} from "@mui/material";
import MenuDrawer from "../components/home/MenuDrawer";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getManagerProfile} from "../modules/manager/actions";
import {driversSelector, getDriversLoadingSelector} from "../modules/drivers/selectors";
import {getDrivers} from "../modules/drivers/actions";
import {DriverFilter} from "../components/drivers/DriverFilter";
import NewDriverDialog from "../components/drivers/NewDriverDialog";
import TableDrivers from "../components/drivers/DriversTable";

export const DriversPage =() => {
    const dispatch = useDispatch()
    const drivers = useSelector(driversSelector)
    const loading = useSelector(getDriversLoadingSelector)
    useEffect(() => {
        dispatch(getDrivers({}))
        dispatch(getManagerProfile())
    },[])
    const headers = ['Name', 'Surname', 'Email', 'Register date', 'Edit' ]
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
                <div style={{marginLeft: 10}}><Typography variant="h4">Drivers</Typography></div>
                <div><MenuDrawer/></div>
            </div>
            <div className="home__navigation">
                <div style={{marginLeft: 10}}><DriverFilter/></div>
                <div><NewDriverDialog/></div>
            </div>
            <Card className="home__table">
                <TableDrivers rows={drivers} headers={headers}/>
            </Card>
        </div>
    )
}
export default DriversPage