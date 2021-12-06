import {useParams} from "react-router";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Card, LinearProgress, Typography} from "@mui/material";
import MenuDrawer from "../components/home/MenuDrawer";
import {getManagerProfile} from "../modules/manager/actions";
import {driverItemSelector, getDriverItemLoadingSelector} from "../modules/drivers/selectors";
import {getDriverItem} from "../modules/drivers/actions";
import {createdDate} from "../helpers/functions";

const DetailDriverPage = () => {
    const {id} = useParams<{ id: string }>()
    const dispatch = useDispatch()
    const driver = useSelector(driverItemSelector)
    const loading = useSelector(getDriverItemLoadingSelector)
    useEffect(() => {
        dispatch(getDriverItem(id))
        dispatch(getManagerProfile())
    }, [])
    if (loading) {
        return (
            <Box sx={{width: '100%'}}>
                <LinearProgress/>
            </Box>
        )
    }
    return (
        <div className="detail-storage">
            {!loading && (
                <>
                    <div className="home__navigation" style={{padding: 20}}>
                        <Card style={{padding: 15}}>
                            <Typography variant="h4">Name: {driver?.name.toUpperCase()}</Typography>
                            <Typography variant="h4">Surname: {driver?.surname}</Typography>
                            <Typography variant="h4">Email: {driver?.email}</Typography>
                            <Typography variant="h4">Password: {driver?.password}</Typography>
                            <Typography variant="h4">Role: {driver?.role}</Typography>
                            <Typography variant="h4">Register date: {createdDate(driver?.registerDate)}</Typography>
                        </Card>
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
export default DetailDriverPage