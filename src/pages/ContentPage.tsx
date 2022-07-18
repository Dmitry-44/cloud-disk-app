import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks/redux'

export default function ContentPage() {
	const navigator = useNavigate()
	const {isAuth} = useAppSelector(state => state.user)
	const checkAuth = () => {
		if(!isAuth) {
			navigator('/')
		}
	}
	useEffect(checkAuth, [isAuth])
	return (
	<div>ContentPage</div>
	)
}
