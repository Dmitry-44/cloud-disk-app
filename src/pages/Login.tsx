import { FC } from "react";
import LoginForm from "../components/registerForm/LoginForm";
import { useAppSelector } from "../store/hooks/redux";


const Login: FC = () => {

    const userState = useAppSelector ( state => state.user )
    
    return(
        <div className="wrapper" style={{margin: '80px auto 0px auto'}}>
            <LoginForm />
        </div>
    )

}

export default Login