import React, { Component } from "react";
import './style.css'
export class PageContent extends Component {
    render() {
        return (
            <div>
                <section className="pt-4">
                    <div className="container px-lg-5">
                        <div className="row gx-lg-5">

                            <div className="col-lg-6 col-xxl-4 mb-5">
                                <div className="card bg-light border-0 h-100">
                                    <div className="card-body text-center p-4  pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                            <i className="fa-solid fa-ethernet"></i>
                                        </div>
                                        <h2 className="fs-4 fw-bold">Fresh new layout</h2>
                                        <p className="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-xxl-4 mb-5">
                                <div className="card bg-light border-0 h-100">
                                    <div className="card-body text-center p-4  pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                            <i className="fa-solid fa-cloud-arrow-down"></i>
                                        </div>
                                        <h2 className="fs-4 fw-bold">Free to download</h2>
                                        <p className="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-xxl-4 mb-5">
                                <div className="card bg-light border-0 h-100">
                                    <div className="card-body text-center p-4  pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                            <i className="fa-regular fa-credit-card"></i>
                                        </div>
                                        <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
                                        <p className="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-xxl-4 mb-5">
                                <div className="card bg-light border-0 h-100">
                                    <div className="card-body text-center p-4  pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                        <i className="fa-brands fa-bootstrap"></i>
                                        </div>
                                        <h2 className="fs-4 fw-bold">Feature boxes</h2>
                                        <p className="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-6 col-xxl-4 mb-5">
                                <div className="card bg-light border-0 h-100">
                                    <div className="card-body text-center p-4  pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                        <i className="fa-solid fa-code"></i>
                                        </div>
                                        <h2 className="fs-4 fw-bold">Simple clean code</h2>
                                        <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-xxl-4 mb-5">
                                <div className="card bg-light border-0 h-100">
                                    <div className="card-body text-center p-4  pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                            <i className="fa-solid fa-ethernet"></i>
                                        </div>
                                        <h2 className="fs-4 fw-bold">A name you trust</h2>
                                        <p className="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}