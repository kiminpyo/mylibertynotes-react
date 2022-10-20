import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LOGIN } from "../reducers/user";
import { useCookies } from "react-cookie";
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [cookies, setCookie] = useCookies(["connect.sid"]); // 쿠키 훅

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userInfo } = useSelector((state) => state.user);
   

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onLogin = () => {
        console.log(email, password);
        dispatch({
            type: LOGIN,
            data: { email: email, password: password },
        });
    };

    const theme = createTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    if (userInfo != null) {
        return navigate("/");
    }
    return (
        <></>
    );
};

export default Login;
