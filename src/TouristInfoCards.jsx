import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="tarjetas row">
      <div className="card one order-1">
        <img
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/04/16/glasgow-main.jpg"
          className="card-img-top"
          alt="Tarjetas 1"
        />
        <div className="card-body">
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>

      <div className="card two order-2">
        <img
          src="https://i.ibb.co/2ckPjF4/image.jpg"
          className="card-img-top"
          alt="Tarjetas 2"
        />
        <div className="card-body">
          <a href="visitmanchester.com" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>

      <div className="card three order-3">
        <img
          src="https://i.ibb.co/3vpQrRd/image2.jpg"
          className="card-img-top"
          alt="Tarjetas 3"
        />
        <div className="card-body">
          <a href="visitlondon.com" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
