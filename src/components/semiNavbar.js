import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const ProjectNavbar = () => {
    return (
        <nav className="navbar navbar-light rounded" style={{ backgroundColor: '#384052', marginBottom: '5px' }}>
            <div className="container-fluid py-1">
                <form className="d-flex justify-content-between align-items-center w-100">
                
                    <div className="input-group w-50">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                        <button type="submit" className="input-group-text border-0 btn btn-primary" id="search-addon">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>

                    
                    <div className="dropdown mx-2">
                        <button
                            className="btn btn-success dropdown-toggle"
                            type="button"
                            id="dropdownMenuCategory"
                            data-bs-toggle="dropdown" // Fixed Bootstrap 5 toggle attribute
                            aria-expanded="false"
                        >
                            Select Category
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuCategory">
                            <li><a className="dropdown-item" href="#a">App Development</a></li>
                            <div class="dropdown-divider"></div>
                            <li><a className="dropdown-item" href="#c">Artificial Intelligence</a></li>
                            <div class="dropdown-divider"></div>
                            <li><a className="dropdown-item" href="#b">Blockchain</a></li>
                            <div class="dropdown-divider"></div>
                            <li><a className="dropdown-item" href="#c">Cyber Security</a></li>
                            <div class="dropdown-divider"></div>
                            <li><a className="dropdown-item" href="#c">Data Science</a></li>
                            <div class="dropdown-divider"></div>
                            <li><a className="dropdown-item" href="#c">IOT</a></li>
                            <div class="dropdown-divider"></div>
                            <li><a className="dropdown-item" href="#c">Web Development</a></li>
                            <div class="dropdown-divider"></div>
                            <li><a className="dropdown-item" href="#c">Other</a></li>
                        </ul>
                    </div>

                    
                    <div className="dropdown">
                        <button
                            className="btn btn-success dropdown-toggle"
                            type="button"
                            id="dropdownMenuSort"
                            data-bs-toggle="dropdown" // Fixed Bootstrap 5 toggle attribute
                            aria-expanded="false"
                        >
                            Sort By
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuSort">
                            <li><a className="dropdown-item" href="#a">Likes</a></li>
                            <div class="dropdown-divider"></div>
                            <li><a className="dropdown-item" href="#b">Bookmarks</a></li>
                        </ul>
                    </div>
                </form>
            </div>
        </nav>
    );
};
