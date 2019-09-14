import React from "react";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card one">
        <img
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/04/16/glasgow-main.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>

      <div className="card two">
        <img
          src="https://media.timeout.com/images/105400776/1372/772/image.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitmanchester.com" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>

      <div className="card two">
        <img
          src="https://www.focus.it/site_stored/imgs/0005/014/doubledecker.630x360.jpg"
          className="card-img-top"
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
