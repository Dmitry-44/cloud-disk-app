import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/registerForm/LoginForm";
import { useAppSelector } from "../store/hooks/redux";


const Login: FC = () => {

    const navigator = useNavigate()
    const {isAuth} = useAppSelector(state=>state.user)
    useEffect(()=> {
        if(isAuth){
            navigator('/')
        }
    },[])

    return(
        <div className="wrapper" style={{margin: '80px auto 0px auto'}}>
            <LoginForm />
        </div>
    )

}

export default Login