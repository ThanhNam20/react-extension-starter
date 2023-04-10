import React from 'react';
import { FacebookShareIcon, TwitterShareIcon, User } from '../../assets';
import MyWallet from './Mywallet';
import AccountDetail from './AccountDetail';

const Account = () => {
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="pills-user"
        role="tabpanel"
        aria-labelledby="pills-user-tab"
        tabIndex={0}
      >
        <div className="container px-0">
          <div className="after-login-block d-block" id="after-login-block">
            <div className="row">
              <div className="col-12 mb-2">
                <ul
                  className="nav nav-pills justify-content-center general-links mb-3"
                  id="user-pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link  active px-5"
                      id="pills-wallet-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-wallet"
                      type="button"
                      role="tab"
                    >
                      My Wallet{' '}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link px-5"
                      id="pills-account-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-account"
                      type="button"
                      role="tab"
                    >
                      Account
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="user-pills-tabContent">
                  <MyWallet />
                  <AccountDetail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
