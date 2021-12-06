import {Box, Card, LinearProgress, Typography} from "@mui/material";
import MenuDrawer from "../components/home/MenuDrawer";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getManagerProfile} from "../modules/manager/actions";
import {getProductsLoadingSelector, productsSelector} from "../modules/products/selectors";
import {getProducts} from "../modules/products/actions";
import TableProducts from "../components/products/ProductsTable";
import {ProductsFilters} from "../components/products/ProductsFilters";
import NewProductDialog from "../components/products/NewProductDialog";

export const ProductsPage =() => {
    const dispatch = useDispatch()
    const products = useSelector(productsSelector)
    const loading = useSelector(getProductsLoadingSelector)
    useEffect(() => {
        dispatch(getProducts({}))
        dispatch(getManagerProfile())
    },[])
    if (loading) {
        return (
            <Box sx={{width: '100%'}}>
                <LinearProgress/>
            </Box>
        )
    }
    const headers = ['Title', 'Weight', 'Storage', 'Car', 'Register date', 'Edit' ]
    return (
        <div className="home">
            <div className="home__navigation">
                <div style={{marginLeft: 10}}><Typography variant="h4">Products</Typography></div>
                <div><MenuDrawer/></div>
            </div>
            <div className="home__navigation">
                <div style={{marginLeft: 10}}><ProductsFilters/></div>
                <div><NewProductDialog/></div>
            </div>
            <Card className="home__table">
                <TableProducts rows={products} headers={headers}/>
            </Card>
        </div>
    )
}
export default ProductsPage