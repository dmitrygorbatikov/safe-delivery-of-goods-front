import {useParams} from "react-router";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Card, LinearProgress, Typography} from "@mui/material";
import MenuDrawer from "../components/home/MenuDrawer";
import {getManagerProfile} from "../modules/manager/actions";
import {carItemSelector, carsIOTSelector, getCarItemLoadingSelector} from "../modules/cars/selectors";
import {carsIOTResponse, getCarItem} from "../modules/cars/actions";
import {getRandomCarsIot} from "../helpers/functions";

const DetailCarPage = () => {
    const {id} = useParams<{ id: string }>()
    const dispatch = useDispatch()
    const car = useSelector(carItemSelector)
    const loading = useSelector(getCarItemLoadingSelector)
    const carsIot = useSelector(carsIOTSelector)
    useEffect(() => {
        dispatch(getCarItem(id))
        dispatch(getManagerProfile())
        setInterval(() => {
            dispatch(carsIOTResponse(getRandomCarsIot()))
        }, 2500)
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
                            <Typography variant="h4" style={{color: `${carsIot.engineHeating > 200 && carsIot.engineHeating < 400 ? 'orange' 
                                    : carsIot.engineHeating > 400 ? 'green': 'red'}`}}>Engine heating: {carsIot.engineHeating}</Typography>
                            <Typography variant="h4" style={{color: `${carsIot.inflationOfTires > 80 ? 'green'
                                    : carsIot.inflationOfTires >40 && carsIot.inflationOfTires < 80 ? 'orange' : 'red'}`}}>Inflation of tires: {carsIot.inflationOfTires}</Typography>
                            <Typography variant="h4" style={{color: `${carsIot.tightnessOfBolts < 100 ? 'green'
                                    : carsIot.tightnessOfBolts > 100 && carsIot.tightnessOfBolts < 170 ? 'orange' : 'red'}`}}>Tightness of bolts: {carsIot.tightnessOfBolts}</Typography>
                            <Typography variant="h4">Measurement date: {carsIot.measurementDate}</Typography>
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