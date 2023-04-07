import React from 'react';
import TrendingStore from '../../components/TrendingStore';
import { SearchIcon } from '../../assets';
import SearchItem from '../../components/SearchItem';
import CouponItem from '../../components/ConponItem/CouponItem';

const Search = () => {
  return (
    <>
      <div className="container my-3 px-0">
        <h3 className="title1 mb-3">Search</h3>
        <div className="position-relative navbar-search-box d-lg-block">
          <form>
            <div className="searchbox-results-wrapper ht-30">
              <input
                type="text"
                className="form-control search-input ql-search rounded-0 ps-2"
                id="search_coupon"
                placeholder="Search"
                required
                autoComplete="on"
              />
              <button type="submit" className="border-0">
                <img src={SearchIcon} alt="" className="search-icon" />
              </button>
            </div>
            <div className="searchbox-results">
              <ul id="scrollTopList">{/* <SearchItem /> */}</ul>
            </div>
          </form>
        </div>
        <ul
          className="nav nav-pills justify-content-center my-3 general-links"
          id="pills-cashback-offers-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-cashback-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-cashback"
              type="button"
              role="tab"
              aria-controls="pills-cashback"
              aria-selected="false"
              tabIndex={-1}
            >
              Top Cashback
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-offers-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-offers"
              type="button"
              role="tab"
              aria-controls="pills-offers"
              aria-selected="true"
            >
              Best Offers
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade"
            id="pills-cashback"
            role="tabpanel"
            aria-labelledby="pills-cashback-tab"
          >
            <div className="list-stores mb-2">
              <TrendingStore redirect={'search'} listBrands={[]} />
            </div>
          </div>
          <div
            className="tab-pane fade active show"
            id="pills-offers"
            role="tabpanel"
            aria-labelledby="pills-offers-tab"
          >
            <div className="row justify-content-center align-items-center">
              <CouponItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
