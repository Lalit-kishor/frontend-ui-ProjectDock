// A compoenent that displays all available projects
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ProjectNavbar } from './semiNavbar.js';


export const AllProjects = () => {
    return (
        <div className='container' style={{marginTop:'80px'}}>
            
            <div className="container mt-2">
                {/* <h1 className="text-center">All Projects</h1> */}
                <ProjectNavbar />
                {[...Array(10)].map((_, i) => (
                    <div className='d-flex justify-content-center'>
                        <div key={i} className="card mb-3" style={{ width: "900px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://static.vecteezy.com/system/resources/previews/000/542/011/original/vector-abstract-background-website-landing-page.png" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">Hostel Management System</h3>
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <p className="card-text"><small className="text-body-secondary">Uploaded on: </small></p>
                                        <p className="card-text"><small className="text-body-secondary">Category: </small></p>

                                    </div>
                                    <div className='d-flex justify-content-between' style={{ margin: '0px 16px' }}>
                                        <div>
                                            <i class="bi bi-heart"></i>
                                            <span className='ms-1'>1k</span>
                                        </div>
                                        <div>
                                            <i class="bi bi-bookmark-plus"></i>
                                            <span className='ms-1'>12345456</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}