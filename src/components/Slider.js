import React from "react";

const Slider = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.sjq_8d7hEOd8a3zmzCQsbgHaE7&pid=Api"
              className="d-block w-100 height-500"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://webeminence.com/wp-content/uploads/2021/02/iStock-831640620-980x653.jpg"
              className="d-block w-100 height-500"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.advisoryexcellence.com/wp-content/uploads/2021/12/E-COMMERCE-PHOTO.jpg"
              className="d-block w-100 height-500"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
