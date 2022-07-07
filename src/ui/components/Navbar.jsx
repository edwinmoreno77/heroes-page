import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow p-2 img-background">

            <Link
                className="navbar-brand m-2"
                to="/"
            >
                <b>Heroes</b>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link m-1 ${isActive ? 'active' : ''}`}
                            to="/marvel"
                        >
                            <b> Marvel</b>
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link m-1 ${isActive ? 'active' : ''}`}
                            to="/dc"
                        >
                            <b>DC</b>
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link m-1 ${isActive ? 'active' : ''}`}
                            to="/search"
                        >
                            <b>Search</b>
                        </NavLink>

                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex btn1">
                    <ul className="navbar-nav ">
                        <button
                            onClick={onLogout}
                            className='nav-item nav-link btn'>
                            <b>Logout</b>
                        </button>
                    </ul>
                </div>
                <span className='text-warning w-100'><b >{user?.name}</b></span>

            </div>
        </nav>
    )
}