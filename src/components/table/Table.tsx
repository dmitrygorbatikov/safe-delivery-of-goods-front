import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {IconButton} from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {useHistory} from "react-router";

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


export default function TableTree(props: any) {
    const {rows, headers} = props
    const history = useHistory()
    return (
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
                            <StyledTableCell component="th" scope="row">
                                {row.title}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.address}</StyledTableCell>
                            <StyledTableCell align="right">{row.temperature}</StyledTableCell>
                            <StyledTableCell align="right">{row.humidity}</StyledTableCell>
                            <StyledTableCell align="right">{row.measurementDate}</StyledTableCell>
                            <StyledTableCell align="right">{row.registerDate}</StyledTableCell>
                            <StyledTableCell align="right">
                                <IconButton onClick={() => {
                                    history.push(`/storages/${row._id}`)
                                }}>
                                    <ModeEditIcon/>
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}