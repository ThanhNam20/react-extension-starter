import React from 'react';

function CarouselComponent() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href="javascript:void(0);">
            <img
              src="assets/images/holiday-deals.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="title1 fw-bold text-white text-start mb-0 text-capitalize">
                First Time Users: Get Upto 15% Cashback At 10,000+ Stores.
              </h5>
            </div>
          </a>
        </div>
        <div className="carousel-item">
          <a href="javascript:void(0);">
            <img
              src="assets/images/gold-deal.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="title1 fw-bold text-white text-start mb-0 text-capitalize">
                Upgrade to Rebates.com Gold and get 2x cashback!
              </h5>
            </div>
          </a>
        </div>
        <div className="carousel-item">
          <a href="https://rebates.com/hot-deals" target="_blank">
            <img
              src="assets/images/hot-deals.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="title1 fw-bold text-white text-start mb-0 text-capitalize">
                Save Big With Top Promo Codes And Deals!
              </h5>
            </div>
          </a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselComponent;
