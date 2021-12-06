import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {useState} from "react";
import TableRowsIcon from '@mui/icons-material/TableRows';
import {IconButton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getManagerProfileLoadingSelector, managerProfileSelector} from "../../modules/manager/selectors";
import {logoutUser} from "../../modules/auth/actions";
import {useHistory} from "react-router";

const MenuDrawer = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const profile = useSelector(managerProfileSelector)
    const loading = useSelector(getManagerProfileLoadingSelector)
    const pathName = document.location.pathname
    return (
        <div>
            <IconButton onClick={() => {
                setOpen(true)
            }}>
                <TableRowsIcon/>
            </IconButton>
            {!loading &&
                <Drawer
                    anchor="right"
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <div className="drawer">
                        <div className="drawer__header">
                            <p>{profile?.email}</p>
                        </div>
                        <div className="menu">
                            <div className={`menu__item ${pathName === '/' || pathName.includes('storage') ? 'menu__item-active' :''}`} onClick={() => {
                                history.push('/')
                            }
                            }>
                                <p>STORAGES</p>
                            </div>
                            <div className={`menu__item ${pathName.includes('cars') ? 'menu__item-active' :''}`} onClick={() => {
                                history.push('/cars')
                            }
                            }>
                                <p>CARS</p>
                            </div>
                            <div className={`menu__item ${pathName.includes('drivers') ? 'menu__item-active' :''}`} onClick={() => {
                                history.push('/drivers')
                            }
                            }>
                                <p>DRIVERS</p>
                            </div>
                            <div className={`menu__item ${pathName.includes('products') ? 'menu__item-active' :''}`} onClick={() => {
                                history.push('/products')
                            }
                            }>
                                <p>PRODUCTS</p>
                            </div>
                            <div className={`menu__item ${pathName.includes('profile') ? 'menu__item-active' :''}`} onClick={() => {
                                history.push('/profile')
                            }
                            }>
                                <p>PROFILE</p>
                            </div>
                            <div className={`menu__item ${pathName.includes('shipping') ? 'menu__item-active' :''}`} onClick={() => {
                                history.push('/shipping')
                            }
                            }>
                                <p>SHIPPING</p>
                            </div>
                            <div className="menu__item" onClick={() => {
                            dispatch(logoutUser())}
                            }>
                                <p>LOGOUT</p>
                            </div>
                        </div>
                    </div>
                </Drawer>
            }
        </div>
    )
}
export default MenuDrawer