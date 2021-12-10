import {useState} from "react";
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {getShipping} from "../../modules/shipping/actions";

export const ShippingFilter = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    return (
        <>
            <TextField
                label="Status"
                variant="outlined"
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        if (search && search !== '') {
                            dispatch(getShipping({search}))
                        } else {
                            dispatch(getShipping({}))
                        }
                    }
                }} value={search} onChange={(e) => setSearch(e.target.value)}/>
        </>
    )
}