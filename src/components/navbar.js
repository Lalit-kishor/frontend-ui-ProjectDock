import { NavLink, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navbar = () => {

    const activeState = (isActive) => ({

            color: isActive ? '#FD4215' : '',
            fontWeight: isActive ? 'bold' : ''
    
    });

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
                <div className="container-fluid">
                    {/* <NavLink className="navbar-brand" to="#">FitBit</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <span className="material-symbols-outlined" style={{color: "yellow", marginLeft: "5px", marginRight: "21px"}}>
                    auto_transmission
                    </span>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home" style={({ isActive }) => activeState(isActive)} >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" style={({ isActive }) => activeState(isActive)} >Profile</NavLink>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        
                        <NavLink to="/logout">
                            <button className="btn btn-outline-danger" type="button">Logout</button>
                        </NavLink>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}