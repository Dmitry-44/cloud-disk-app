import { FC } from "react";
import RegisterForm from "../components/registerForm/RegisterForm";


const Registration: FC = () => {

    return(
        <div className="wrapper" style={{margin: '80px auto 0px auto'}}>
            <RegisterForm />
        </div>
    )

}

export default Registration