import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
    return (
        <div style={{ display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center", height: "100vh", fontFamily: "Arima, sans-serif" }}>

            <h1>Welcome to the Community 🎉</h1>

            {/* <div className="row"> */}
                <div className="col-sm-6 mb-3 mb-sm-0 mt-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Add Project</h5>
                            <p className="card-text">Share your precious work and help the community to grow with your excellent working project. You can also share the ideas behind it.</p>
                            <NavLink to="/newProject" className="btn btn-success">Add New</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mt-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Review Project</h5>
                            <p className="card-text">Check out some available awesome projects and provide your valuable feedback. Now, you can also ask doubts.</p>
                            <NavLink to="#" className="btn btn-primary">Check out</NavLink>
                        </div>
                    </div>
                </div>
            {/* </div> */}

        </div>
    )
}