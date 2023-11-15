import React from 'react';
import { FaRegStar, FaStar, FaStarHalf } from 'react-icons/fa';

const rating = ({ value, text }) => {

  // these values are hardcoded, still need to figure out how to get the users to do this. using
  return (
    <div className="rating">
      <span>
        {value >= 1 ? (
          <FaStar />
        ) : value >= 0.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar />
        ) : value >= 1.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar />
        ) : value >= 2.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar />
        ) : value >= 3.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar />
        ) : value >= 4.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="rating-text"> {text && text}</span>
    </div>
  );
};

export default rating;
