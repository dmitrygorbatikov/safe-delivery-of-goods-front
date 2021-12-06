import React, {useEffect} from "react";
import {Card, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import MenuDrawer from "../components/home/MenuDrawer";
import TableTree from "../components/table/Table";
import {getStorages} from "../modules/storages/actions";
import {storagesSelector} from "../modules/storages/selectors";
import {normalizeStorageData} from "../helpers/functions";
import {Filters} from "../components/table/Filters";
import NewStorageDialog from "../components/home/NewStorageDialog";
import {getManagerProfile} from "../modules/manager/actions";

const HomePage = () => {
    const dispatch = useDispatch()
    const storages = useSelector(storagesSelector)
    useEffect(() => {
        dispatch(getStorages({}))
        dispatch(getManagerProfile())
    }, [])
    const rows = normalizeStorageData(storages)
    const headers = ['Title', 'Address', 'Temperature', 'Humidity', 'Measurement date', 'Register date', 'Edit']
    return (
        <div className="home">
            <div className="home__navigation">
                <div style={{marginLeft: 10}}><Typography variant="h4">Storages</Typography></div>
                <div><MenuDrawer/></div>
            </div>
            <div className="home__navigation">
                <div style={{marginLeft: 10}}><Filters/></div>
                <div><NewStorageDialog/></div>
            </div>
            <Card className="home__table">
                <TableTree rows={rows} headers={headers}/>
            </Card>
        </div>
    )
}
export default HomePage