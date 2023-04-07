import React from 'react';

const CouponItem = () => {
  return (
    <>
      <a
        href="https://rebates.com/coupons/justfly.com"
        className="text-decoration-none"
      >
        <div className="col-12 mb-2">
          <div className="shadow-sm bg-white border rounded-3 p-2">
            <div className="row justify-content-between align-items-center">
              <div className="col-4">
                <div className="offers">
                  <img
                    src="http://design.admedia.com/rebates_new/Rebates_extension_assets/assets/images/coupons/justflydotcom.png"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="p-2">
                  <h3 className="coupons-title">Get up to 80% off flights.</h3>
                  <div className="coupon-info">4% Cash Back</div>
                  <button
                    type="button"
                    className="btn btn-sm bg-color-second text-white mt-2"
                  >
                    See Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default CouponItem;
