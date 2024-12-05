// A compoenent that displays all available projects
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ProjectNavbar } from './semiNavbar.js';


export const AllProjects = () => {
    return (
        <div className='container' style={{ marginTop: '56px', width: '900px' }}>
            <div className='sticky-top' style={{ top: '56px', zIndex: '1020' }}>
                <ProjectNavbar />
            </div>

            {[...Array(10)].map((_, i) => (

                <div key={i} className="card mb-3">
                    <div className="row g-0">
                        <div className="col-12 col-md-4">
                            <img src="https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/01/5.jpg"
                                className="img-fluid rounded-start"
                                alt="..."
                                style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">Hostel Management System</h3>
                                <p className="card-text"><h6 className="text-body-secondary">Uploaded on: </h6></p>
                                <p className="card-text"><h6 className="text-body-secondary">Category: </h6></p>

                            </div>
                            <div className='d-flex justify-content-between' style={{ margin: '0px 16px' }}>
                                <div>
                                    <i className="bi bi-heart"></i>
                                    <span className='ms-1'>1k</span>
                                </div>
                                <div>
                                    <i className="bi bi-bookmark-plus"></i>
                                    <span className='ms-1'>12345456</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}