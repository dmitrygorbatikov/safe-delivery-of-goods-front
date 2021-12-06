import {useHistory, useParams} from "react-router";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Card, LinearProgress, Typography} from "@mui/material";
import MenuDrawer from "../components/home/MenuDrawer";
import {getManagerProfile} from "../modules/manager/actions";
import {createdDate} from "../helpers/functions";
import {getProductItemLoadingSelector, productItemSelector} from "../modules/products/selectors";
import {getProductItem} from "../modules/products/actions";

const DetailProductsPage = () => {
    const {id} = useParams<{ id: string }>()
    const dispatch = useDispatch()
    const history = useHistory()
    const product = useSelector(productItemSelector)
    const loading = useSelector(getProductItemLoadingSelector)
    useEffect(() => {
        dispatch(getProductItem(id))
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
                            <Typography variant="h4">Title: {product?.title.toUpperCase()}</Typography>
                            <Typography variant="h4">Weight: {product?.weight}</Typography>
                            <Typography variant="h4">StorageId: {product?.storageId} <Button onClick={() => {
                                history.push(`/storages/${product.storageId}`)
                            }}>Go to storage</Button></Typography>
                            <Typography variant="h4">Register date: {createdDate(product?.registerDate)}</Typography>
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
export default DetailProductsPage