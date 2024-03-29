import { Email } from "@mui/icons-material";
import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registration } from "../../store/action-creations/user";
import { useAppDispatch } from "../../store/hooks/redux";
import './form.css'


export default function RegisterForm() {

    const dispatch = useAppDispatch()
    const navigator = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [errorText, setErrorText] = useState('');

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		setErrorText('')
		if(password !== confirmedPassword) {
			setErrorText('The password confirmation does not match')
		}
        dispatch(registration(email,password)).then(() => navigator('/login'))
	}
	const setEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}
	const setPasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}
	const setConfirmedPasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setConfirmedPassword(e.target.value)
	}

    return (
        <Box className="form form-register" component="form" onSubmit={submitHandler}>
            <div><h4 className="form-title">Registration</h4></div>

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
                    type="password"
                    autoComplete="password"
                    onChange={setPasswordValue}
                />
            </FormControl>

            <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="passwordConfrim">
                    confirm password
                </InputLabel>
                <OutlinedInput
                    name="passwordConfrim"
                    type="password"
                    autoComplete="passwordConfrim"
                    onChange={setConfirmedPasswordValue}
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