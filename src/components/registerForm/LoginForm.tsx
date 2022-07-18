import { Email } from "@mui/icons-material";
import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/action-creations/user";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import './register-form.css'



export default function LoginForm() {

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');


	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		setErrorText('')

        dispatch(login(email,password)).then(() => navigate('/content'))
	}
	const setEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}
	const setPasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

    return (
        <Box className="form form-register" component="form" onSubmit={submitHandler}>
            <div><h4>Authorisation</h4></div>

            <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="email">
                    e-mail
                </InputLabel>
                <OutlinedInput
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={setEmailValue}
                />
            </FormControl>

            <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="password">
                    password
                </InputLabel>
                <OutlinedInput
                    name="password"
                    autoComplete="password"
                    onChange={setPasswordValue}
                />
            </FormControl>
            <span className="error__text">{errorText}</span>
            <Button
                className="button-submit"
                disableRipple
                size="large"
                variant="outlined"
                type="submit"
            >
                Submit
            </Button>

        </Box>
    );
}