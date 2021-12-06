import {useParams} from "react-router";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Card, LinearProgress, Typography} from "@mui/material";
import MenuDrawer from "../components/home/MenuDrawer";
import {getManagerProfile} from "../modules/manager/actions";
import {carItemSelector, getCarItemLoadingSelector} from "../modules/cars/selectors";
import {getCarItem} from "../modules/cars/actions";

const DetailCarPage = () => {
    const {id} = useParams<{ id: string }>()
    const dispatch = useDispatch()
    const car = useSelector(carItemSelector)
    const loading = useSelector(getCarItemLoadingSelector)
    useEffect(() => {
        dispatch(getCarItem(id))
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
                            <Typography variant="h4">Number: {car?.number.toUpperCase()}</Typography>
                            <Typography variant="h4">Model: {car?.model}</Typography>
                            <Typography variant="h4">Carrying capacity: {car?.carryingCapacity}</Typography>
                            <Typography variant="h4">Driver _id: {car?.driverId}</Typography>
                            <Typography variant="h4">Price: {car?.price}</Typography>
                            <Typography variant="h4">Storage _id: {car?.storageId}</Typography>
                            <Typography variant="h4">Latitude: {car?.latitude}</Typography>
                            <Typography variant="h4">Longitude: {car?.longitude}</Typography>
                            <Typography variant="h4">Created date: {car?.registerDate}</Typography>
                            <Typography variant="h4">Engine heating: {car?.indicators[car?.indicators.length-1]?.engineHeating ?? '--'}</Typography>
                            <Typography variant="h4">Inflation of tires: {car?.indicators[car?.indicators.length-1]?.inflationOfTires ?? '--'}</Typography>
                            <Typography variant="h4">Tightness of bolts: {car?.indicators[car?.indicators.length-1]?.tightnessOfBolts ?? '--'}</Typography>
                            <Typography variant="h4">Measurement date: {car?.indicators[car?.indicators.length-1]?.measurementDate ?? '--'}</Typography>
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
export default DetailCarPage