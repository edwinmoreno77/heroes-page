import React from 'react'

export const SliderDc = () => {
    return (
        <>
            <section id="Inicio" className="img-bg-navbar">
                <div id="carouselExampleControls" className="carousel slide mt-carousel" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center img-carousel-1">
                                <img src="assets/img/JusticeLeague-Backgrounds.jpg" className="d-block" alt="..." />
                            </div>
                            <div className="carousel-caption d-none d-md-block text-dark">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center img-carousel-2">
                                <img src="/assets/img/bg-LJ.png" className="d-block" alt="..." />
                            </div>
                            <div className="carousel-caption d-none d-md-block text-dark">
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center img-carousel-3">
                                <img src="/assets/img/slider3-LJ.jpg" className="d-block" alt="..." />
                            </div>
                            <div className="carousel-caption d-none d-md-block text-dark">
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </section>
        </>
    )
}
