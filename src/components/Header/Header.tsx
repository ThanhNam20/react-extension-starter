import React from 'react';

const Header = () => {
  return (
    <header className="sticky-top bg-white p-3">
      <div className="row justify-content-between align-items-center">
        <div className="col-sm-3">
          <a
            href="rebates.com"
            target="_blank"
            className="logo-container text-decoration-none"
          >
            <img
              src="http://design.admedia.com/rebates_new/Rebates_extension_assets/assets/images/logo-icon.png"
              alt="Rebates logo"
            />
          </a>
          <div className="menu-bar-icon header-icon ms-2">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <path
                className="st0"
                d="M456.9,148.8H59.3c-18.8,0-34.1-15.3-34.1-34.1l0,0c0-18.8,15.3-34.1,34.1-34.1H457c18.8,0,34.1,15.3,34.1,34.1
      l0,0C491,133.5,475.7,148.8,456.9,148.8z"
              />
              <path
                className="st0"
                d="M456.9,293.3H59.3c-18.8,0-34.1-15.3-34.1-34.1l0,0c0-18.8,15.3-34.1,34.1-34.1H457c18.8,0,34.1,15.3,34.1,34.1
      l0,0C491,278,475.7,293.3,456.9,293.3z"
              />
              <path
                className="st0"
                d="M456.9,442.4H59.3c-18.8,0-34.1-15.3-34.1-34.1l0,0c0-18.8,15.3-34.1,34.1-34.1H457c18.8,0,34.1,15.3,34.1,34.1
      l0,0C491,427.1,475.7,442.4,456.9,442.4z"
              />
            </svg>
          </div>
        </div>
        <div className="col-sm-7 text-center">
          <h2 className="title2 mb-0 text-limit-1">Rebate.com</h2>
        </div>
        <div className="col-sm-2">
          <div className="text-end">
            <div className="close-extenstion-icon header-icon">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <path
                  className="st0"
                  d="M55.3,493.8c-4.7,0-9.3,0-14,0c-6.6-2.4-13.2-5.2-17.2-11.2c-2.9-4.3-4.7-9.3-7-13.9c0-3.4,0-6.8,0-10.2
        c2.1-9.3,8-16,14.6-22.6c58.8-58.5,117.4-117.1,176.2-175.6c1.3-1.3,3-2.1,5.5-3.7c-2.8-2.2-4.4-3.2-5.7-4.5
        C149.1,193.5,90.5,135,31.9,76.7c-6.6-6.6-12.5-13.3-14.7-22.5c0-3.4,0-6.8,0-10.2c0.4-1,0.8-2,1.1-3c2.7-8.7,7.9-15.3,16.2-19.4
        c12.6-6.2,26.1-3.6,36.9,7.3c60,59.9,120.1,119.8,180,179.7c1.3,1.3,2.1,3,3.9,5.5c2.2-2.7,3.2-4.3,4.5-5.6
        c59.4-59.4,118.9-118.7,178.4-178.1c1.4-1.4,2.8-2.9,4.3-4.2c16.7-14.9,43-7.8,49.9,13.4c0.5,1.4,1,2.9,1.6,4.3c0,3.4,0,6.8,0,10.2
        c-2.3,9.4-8.3,16.2-15,22.9c-58.7,58.4-117.2,116.9-175.8,175.3c-1.3,1.3-3.1,1.9-5.3,3.3c2.8,2.4,4.2,3.4,5.4,4.6
        c58.7,58.6,117.3,117.2,176.1,175.7c6.6,6.6,12.4,13.3,14.6,22.6c0,3.4,0,6.8,0,10.2c-3.5,12.7-11.4,21.3-24.2,25.1
        c-4.7,0-9.3,0-14,0c-8.9-3-15.4-9.4-21.9-15.9c-58.1-58.1-116.2-116.1-174.4-174.1c-1.3-1.3-2.6-2.5-4.6-4.4
        c-1.4,1.8-2.4,3.4-3.7,4.7c-58.3,58.3-116.7,116.5-175,174.8C70,485.1,63.8,490.9,55.3,493.8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
