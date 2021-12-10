import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Button, Typography} from "@mui/material";
import {useHistory} from "react-router";
import {createdDate, msToTime} from "../../helpers/functions";
import ViewGoodsDialog from "./ViewGoodsDialog";
import {ShippingStatusEnum} from "../../modules/shipping/types";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function TableShipping(props: any) {
    const {rows, headers} = props
    const history = useHistory()
    return (
        <>{rows.length > 0 ?
            <TableContainer>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                    <TableHead style={{background: 'white'}}>
                        <TableRow>
                            {headers.map((header: string, index: number) => {
                                return index === 0 ? <StyledTableCell>{header}</StyledTableCell> :
                                    <StyledTableCell align="right">{header}</StyledTableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row: any) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell align="right"
                                                 style={{textAlign: 'right'}}>{row.status === ShippingStatusEnum.planned ?
                                    <div style={{fontWeight: 700, color: 'orange', fontSize: 25}}>PLANNED</div> :
                                    row.status === ShippingStatusEnum.sent ?
                                        <div style={{fontWeight: 700, color: 'blue', fontSize: 25}}>SENT</div> : <div
                                            style={{
                                                fontWeight: 700,
                                                color: 'green',
                                                fontSize: 25
                                            }}>DELIVERED</div>}</StyledTableCell>
                                <StyledTableCell align="right"><Button variant="outlined" color="warning"
                                                                       onClick={() => {
                                                                           history.push(`/storages/${row.storageFrom}`)
                                                                       }}>View storage from</Button></StyledTableCell>
                                <StyledTableCell align="right"><Button variant="outlined" color="warning"
                                                                       onClick={() => {
                                                                           history.push(`/storages/${row.storageTo}`)
                                                                       }}>View storage to</Button></StyledTableCell>
                                <StyledTableCell align="right"><Button variant="outlined" color="warning"
                                                                       onClick={() => {
                                                                           history.push(`/cars/${row.carId}`)
                                                                       }}>View car</Button></StyledTableCell>
                                <StyledTableCell align="right"><Button variant="outlined" color="warning"
                                                                       onClick={() => {
                                                                           history.push(`/drivers/${row.driverId}`)
                                                                       }}>View driver</Button></StyledTableCell>
                                <StyledTableCell align="right">{row.arrivalTime !== 0 ? msToTime(row.arrivalTime-row.registerDate) : '--'}</StyledTableCell>
                                <StyledTableCell align="right"><ViewGoodsDialog goods={row.goods}/></StyledTableCell>
                                <StyledTableCell align="right">{row.arrivalTime !== 0 ? createdDate(row.arrivalTime) : '--'}</StyledTableCell>
                                <StyledTableCell align="right">{createdDate(row.registerDate)}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            : <Typography variant="h6">No data found</Typography>
        }</>
    );
}