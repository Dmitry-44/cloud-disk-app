import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/registerForm/RegisterForm";
import RegisterForm2 from "../components/registerForm/RegisterForm";
import { useAppSelector } from "../store/hooks/redux";


const Registration: FC = () => {
    const navigator = useNavigate()
    const {isAuth} = useAppSelector(state => state.user)
	useEffect(()=> {
        if(isAuth){
            navigator('/')
        }
    },[])

    return(
        <div className="wrapper" style={{margin: '80px auto 0px auto'}}>
            <RegisterForm />
        </div>
    )
}

export default Registration