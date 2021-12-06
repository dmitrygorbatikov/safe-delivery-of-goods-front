import {useState} from "react";
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {getProducts} from "../../modules/products/actions";

export const ProductsFilters = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    return (
        <>
            <TextField label="Title"
                       variant="outlined"

                       onKeyPress={(e) => {
                           if (e.key === 'Enter') {
                               if (search && search !== '') {
                                   dispatch(getProducts({search}))
                               } else {
                                   dispatch(getProducts({}))
                               }
                           }
                       }} value={search} onChange={(e) => setSearch(e.target.value)}/>
        </>
    )
}