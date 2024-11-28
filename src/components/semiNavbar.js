import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const ProjectNavbar = () => {
    return (
        <nav class="navbar navbar-light bg-body-tertiary">
            <div class="container-fluid">
                <form class="d-flex input-group w-auto">
                    <input
                        type="search"
                        class="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </form>
            </div>
        </nav>
    );
};

