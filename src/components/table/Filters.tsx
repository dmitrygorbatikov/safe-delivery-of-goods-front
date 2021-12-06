import {useState} from "react";
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {getStorages} from "../../modules/storages/actions";

export const Filters = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    return (
        <>
            <TextField label="Address"
                           variant="outlined"

                           onKeyPress={(e) => {
                               if (e.key === 'Enter') {
                                   if (search && search !== '') {
                                       dispatch(getStorages({search}))
                                   } else {
                                       dispatch(getStorages({}))
                                   }
                               }
                           }} value={search} onChange={(e) => setSearch(e.target.value)}/>
        </>
    )
}