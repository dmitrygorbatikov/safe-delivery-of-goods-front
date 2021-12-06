import {useState} from "react";
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {getCars} from "../../modules/cars/actions";

export const CarsFilters = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    return (
        <>
            <TextField label="Number"
                       variant="outlined"

                       onKeyPress={(e) => {
                           if (e.key === 'Enter') {
                               if (search && search !== '') {
                                   dispatch(getCars({search}))
                               } else {
                                   dispatch(getCars({}))
                               }
                           }
                       }} value={search} onChange={(e) => setSearch(e.target.value)}/>
        </>
    )
}