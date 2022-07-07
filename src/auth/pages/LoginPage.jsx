import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {

    const { login } = useContext(AuthContext);

    const navigate2 = useNavigate();

    const onLogin = () => {

        const lastPath = localStorage.getItem("lastPath") || "/";

        login('Edwin Moreno');

        navigate2(lastPath, {
            replace: true
        });
    }
    return (
        <div className="m-5">
            <h1>Login Page</h1>
            <hr />

            <button
                onClick={onLogin}
                className="btn btn-primary">
                Login
            </button>
            <div className="row">
                <div className="col-4">
                    <img src="/assets/img/JusticeLeague-Backgrounds2.jpg" alt="" />
                </div>
            </div>


        </div>
    )
}
