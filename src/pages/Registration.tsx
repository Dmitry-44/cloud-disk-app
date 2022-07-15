import { FC } from "react";
import RegisterForm from "../components/registerForm/RegisterForm";
import RegisterForm2 from "../components/registerForm/RegisterForm";
import { useAppSelector } from "../store/hooks/redux";


const Registration: FC = () => {

    const state = useAppSelector( state => state.user )


    return(
        <div className="wrapper" style={{margin: '80px auto 0px auto'}}>
            <RegisterForm />
        </div>
    )
}

export default Registration