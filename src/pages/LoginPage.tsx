import React, {useState} from "react";
import {Alert, Box, Button, Card, LinearProgress, OutlinedInput, Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../modules/auth/actions";
import {errorSelector, loadingSelector} from "../modules/auth/selectors";
import {useHistory} from "react-router";

const LoginPage = () => {
    const history = useHistory()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useDispatch()
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const error = useSelector(errorSelector)
    const loading = useSelector(loadingSelector)
    const loginUser = () => {
        if (!email || !password) {
            setErrorMessage('Email and password not must be empty')
            setOpenSnackBar(true)
            setEmail('')
            setPassword('')
        } else {
            dispatch(login({email, password}))
            setEmail('')
            setPassword('')
            if (!loading) {
                if(error) {
                    setErrorMessage(error)
                    setOpenSnackBar(true)
                }
            }
        }
    }
    if (loading) {
        return (
            <Box sx={{width: '100%'}}>
                <LinearProgress/>
            </Box>
        )
    }
    return (
        <div className="login">
            <span className="login__header">{`Safe delivery of goods | LOGIN`}</span>
            <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={() => setOpenSnackBar(false)}>
                <Alert onClose={() => setOpenSnackBar(false)} severity="error" sx={{width: '100%'}}>
                    {errorMessage}
                </Alert>
            </Snackbar>
            <Card className="login__form">
                <div>
                    <OutlinedInput className="login__email-input" placeholder="Email" type="text"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <br/>
                <div>
                    <OutlinedInput className="login__input" placeholder="Password" type="password" value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <br/>
                <Button variant="outlined" color="primary" className="login__button" onClick={loginUser}>Sign
                    In</Button>
                <div className="login__not-registered">
                    <p className="login__bottom-p">Not registered ?</p>
                    <Button onClick={() => {
                        history.push('/register')
                    }}>Sign Up</Button>
                </div>
            </Card>
        </div>
    )
}
export default LoginPage