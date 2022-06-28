import { useNavigate } from "react-router-dom";


export const LoginPage = () => {

    const navigate2 = useNavigate();

    const onLogin = () => {
        navigate2('/', {
            replace: true
        });
    }
    return (
        <div className="container mt-5">
            <h1>Login Page</h1>
            <hr />

            <button
                onClick={onLogin}
                className="btn btn-primary">
                Login
            </button>

        </div>
    )
}
