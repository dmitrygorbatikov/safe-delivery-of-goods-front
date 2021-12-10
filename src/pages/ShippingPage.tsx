import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getManagerProfile} from "../modules/manager/actions";
import {Card, Typography} from "@mui/material";
import MenuDrawer from "../components/home/MenuDrawer";
import {Filters} from "../components/table/Filters";
import {shippingSelector} from "../modules/shipping/selectors";
import {getShipping} from "../modules/shipping/actions";
import TableShipping from "../components/shipping/ShippingTable";
import NewShippingDialog from "../components/shipping/NewShippingDialog";
import {ShippingFilter} from "../components/shipping/ShippingFilter";

const ShippingPage = () => {
    const dispatch = useDispatch()
    const shipping = useSelector(shippingSelector)
    useEffect(() => {
        dispatch(getShipping({}))
        dispatch(getManagerProfile())
    }, [])
    const headers = ['Status', 'Storage from', 'Storage to', 'Car', 'Driver', 'Dispatch time', 'Goods', 'Arrival time', 'Register date']
    return (
        <div className="home">
            <div className="home__navigation">
                <div style={{marginLeft: 10}}><Typography variant="h4">Shipping</Typography></div>
                <div><MenuDrawer/></div>
            </div>
            <div className="home__navigation">
                <div style={{marginLeft: 10}}><ShippingFilter/></div>
                <div><NewShippingDialog/></div>
            </div>
            <Card className="home__table">
                <TableShipping rows={shipping} headers={headers}/>
            </Card>
        </div>
    )
}
export default ShippingPage