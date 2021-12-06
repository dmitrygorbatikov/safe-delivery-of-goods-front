import {useState} from "react";
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {getDrivers} from "../../modules/drivers/actions";

export const DriverFilter = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    return (
        <>
            <TextField label="Email"
                       variant="outlined"

                       onKeyPress={(e) => {
                           if (e.key === 'Enter') {
                               if (search && search !== '') {
                                   dispatch(getDrivers({search}))
                               } else {
                                   dispatch(getDrivers({}))
                               }
                           }
                       }} value={search} onChange={(e) => setSearch(e.target.value)}/>
        </>
    )
}