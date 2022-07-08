import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './register-form.css'

interface RegisterFormProps{}

type stateTypes = {
	email: string,
	password: string,
	confirmedPassword: string
	errorText: string
}

class RegisterForm extends React.Component<RegisterFormProps,stateTypes> {

	constructor(props: RegisterFormProps) {
		super(props)
		this.submitHandler=this.submitHandler.bind(this)
		this.setEmail=this.setEmail.bind(this)
		this.setPassword=this.setPassword.bind(this)
		this.setConfirmedPassword=this.setConfirmedPassword.bind(this)
		this.toggleAuth=this.toggleAuth.bind(this)
	}

	state: stateTypes = {
		email: '',
		password: '',
		confirmedPassword: '',
		errorText: ''
	}

	submitHandler(e: React.FormEvent) {
		e.preventDefault();
		this.setState({errorText: ''})
		if(this.state.password !== this.state.confirmedPassword) {
			this.setState({errorText: 'The password confirmation does not match'})
		}
		let data = {
			email: this.state.email,
			password: this.state.password
		}


	}
	setEmail(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({email: e.target.value})
	}
	setPassword(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({password: e.target.value})
	}
	setConfirmedPassword(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({confirmedPassword: e.target.value})

	}

	toggleAuth() {

	}


    render() {
        return (
            <Box className="form form-register" component="form" onSubmit={this.submitHandler}>
				<div><h4>Registration</h4></div>

                <FormControl required fullWidth margin="normal">
                    <InputLabel htmlFor="email">
                        e-mail
                    </InputLabel>
                    <OutlinedInput
                        name="email"
                        type="email"
                        autoComplete="email"
						onChange={this.setEmail}
                    />
                </FormControl>

                <FormControl required fullWidth margin="normal">
                    <InputLabel htmlFor="password">
                        password
                    </InputLabel>
                    <OutlinedInput
                        name="password"
                        autoComplete="password"
						onChange={this.setPassword}
                    />
                </FormControl>

                <FormControl required fullWidth margin="normal">
                    <InputLabel htmlFor="passwordConfrim">
                        confirm password
                    </InputLabel>
                    <OutlinedInput
                        name="passwordConfrim"
                        autoComplete="passwordConfrim"
						onChange={this.setConfirmedPassword}
                    />
                </FormControl>
				<span className="error__text">{this.state.errorText}</span>
                <Button
                    className="button-submit"
                    disableRipple
					size="large"
                    variant="outlined"
                    type="submit"
                >
                    Submit
                </Button>
				<Button
                    className="button-submit"
                    disableRipple
					size="large"
                    variant="outlined"
                    type="button"
					onClick={this.toggleAuth}
                >
                    toggleAuth
                </Button>
            </Box>
        )
    }
}

export default RegisterForm
