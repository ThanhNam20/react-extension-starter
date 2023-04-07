import React from 'react';

const SearchItem = () => {
  return (
    <>
      <li className="d-flex align-items-center">
        <a href="#" target="_blank">
          <div className="result-left">
            <img
              src="https://tomthumbs.s3-us-west-1.amazonaws.com/6e35bd7c69b2e630bd0de83b0fedb504/c495ddae25b2d4788a70126bfdc6c53a-t.png"
              alt="Image not found"
            />
          </div>
          <div className="result-right pt-2 ps-2">
            <div className="coupon_brand">Macys.com</div>
            <div className="coupon_info d-xl-flex d-lg-flex d-block">
              <span className="pe-2 text-success d-xl-flex d-lg-flex d-block">
                Upto 20% Cash Back
              </span>
              27 offers
            </div>
          </div>
        </a>
      </li>
    </>
  );
};

export default SearchItem;
