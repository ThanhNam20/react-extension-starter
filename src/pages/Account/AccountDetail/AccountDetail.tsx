import React from 'react';
import { User } from '../../../assets';

const AccountDetail = () => {
  return (
    <>
      <div
        className="tab-pane fade"
        id="pills-account"
        role="tabpanel"
        tabIndex={0}
      >
        <div className="list-nav-profile">
          <ul>
            <li className="list-nav-item">
              <a
                href="/"
                className="list-nav-item-btn d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center py-2">
                  <img src={User} className="user-info d-block me-4" />
                  <div>
                    <h5 className="title2 color-first text-start mb-0">
                      Username
                    </h5>
                    <p className="mb-0 text-start">username@gmail.com</p>
                  </div>
                </div>
              </a>
            </li>
            <li className="list-nav-item">
              <a
                href="https://rebates.com/settings/user-profile"
                className="list-nav-item-btn d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">Account Setting</div>
                <div className="d-flex align-items-center">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="512px"
                    height="512px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      className="st0"
                      d="M176.9,112.9c8.3-8.3,21.8-8.3,30.2,0l128,128c8.3,8.3,8.3,21.8,0,30.2l-128,128c-8.3,8.3-21.8,8.3-30.2,0
                          c-8.3-8.3-8.3-21.8,0-30.2L289.8,256L176.9,143.1C168.6,134.8,168.6,121.2,176.9,112.9L176.9,112.9z"
                    />
                  </svg>
                </div>
              </a>
            </li>
            {/*  <li class="list-nav-item">
                      <a href="https://rebates.com/settings/password" class="list-nav-item-btn d-flex justify-content-between align-items-center" >
                        <div class="d-flex align-items-center">Change Password</div>    
                        <div class="d-flex align-items-center">
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                          <style type="text/css">
                          .st0{fill-rule:evenodd;clip-rule:evenodd;}
                          </style>
                          <path class="st0" d="M176.9,112.9c8.3-8.3,21.8-8.3,30.2,0l128,128c8.3,8.3,8.3,21.8,0,30.2l-128,128c-8.3,8.3-21.8,8.3-30.2,0
                          c-8.3-8.3-8.3-21.8,0-30.2L289.8,256L176.9,143.1C168.6,134.8,168.6,121.2,176.9,112.9L176.9,112.9z"/>
                          </svg>
                        </div>    
                      </a>    
                    </li> */}
            <li className="list-nav-item">
              <a
                href="https://rebates.com/user/deal-alerts"
                className="list-nav-item-btn d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">Deal Alerts</div>
                <div className="d-flex align-items-center">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="512px"
                    height="512px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n                                    .st0{fill-rule:evenodd;clip-rule:evenodd;}\n                                  ',
                      }}
                    />
                    <path
                      className="st0"
                      d="M176.9,112.9c8.3-8.3,21.8-8.3,30.2,0l128,128c8.3,8.3,8.3,21.8,0,30.2l-128,128c-8.3,8.3-21.8,8.3-30.2,0
                              c-8.3-8.3-8.3-21.8,0-30.2L289.8,256L176.9,143.1C168.6,134.8,168.6,121.2,176.9,112.9L176.9,112.9z"
                    />
                  </svg>
                </div>
              </a>
            </li>
            <li className="list-nav-item">
              <a
                href="https://rebates.com/user/post-deal"
                className="list-nav-item-btn d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">Post Deals</div>
                <div className="d-flex align-items-center">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="512px"
                    height="512px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n                                    .st0{fill-rule:evenodd;clip-rule:evenodd;}\n                                  ',
                      }}
                    />
                    <path
                      className="st0"
                      d="M176.9,112.9c8.3-8.3,21.8-8.3,30.2,0l128,128c8.3,8.3,8.3,21.8,0,30.2l-128,128c-8.3,8.3-21.8,8.3-30.2,0
                              c-8.3-8.3-8.3-21.8,0-30.2L289.8,256L176.9,143.1C168.6,134.8,168.6,121.2,176.9,112.9L176.9,112.9z"
                    />
                  </svg>
                </div>
              </a>
            </li>
            <li className="list-nav-item">
              <a
                href="https://rebates.com/user/cashback"
                className="list-nav-item-btn d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">Cashback</div>
                <div className="d-flex align-items-center">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="512px"
                    height="512px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n                                    .st0{fill-rule:evenodd;clip-rule:evenodd;}\n                                  ',
                      }}
                    />
                    <path
                      className="st0"
                      d="M176.9,112.9c8.3-8.3,21.8-8.3,30.2,0l128,128c8.3,8.3,8.3,21.8,0,30.2l-128,128c-8.3,8.3-21.8,8.3-30.2,0
                              c-8.3-8.3-8.3-21.8,0-30.2L289.8,256L176.9,143.1C168.6,134.8,168.6,121.2,176.9,112.9L176.9,112.9z"
                    />
                  </svg>
                </div>
              </a>
            </li>
            <li className="list-nav-item">
              <a
                href="https://rebates.com/user/withdraw-money"
                className="list-nav-item-btn d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  Withdrawal Money
                </div>
                <div className="d-flex align-items-center">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="512px"
                    height="512px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n                                  .st0{fill-rule:evenodd;clip-rule:evenodd;}\n                                ',
                      }}
                    />
                    <path
                      className="st0"
                      d="M176.9,112.9c8.3-8.3,21.8-8.3,30.2,0l128,128c8.3,8.3,8.3,21.8,0,30.2l-128,128c-8.3,8.3-21.8,8.3-30.2,0
                            c-8.3-8.3-8.3-21.8,0-30.2L289.8,256L176.9,143.1C168.6,134.8,168.6,121.2,176.9,112.9L176.9,112.9z"
                    />
                  </svg>
                </div>
              </a>
            </li>
            <li className="list-nav-item">
              <a
                href="#"
                className="list-nav-item-btn d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">Logout</div>
                <div className="d-flex align-items-center">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="512px"
                    height="512px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n                                    .st0{fill-rule:evenodd;clip-rule:evenodd;}\n                                  ',
                      }}
                    />
                    <path
                      className="st0"
                      d="M176.9,112.9c8.3-8.3,21.8-8.3,30.2,0l128,128c8.3,8.3,8.3,21.8,0,30.2l-128,128c-8.3,8.3-21.8,8.3-30.2,0
                              c-8.3-8.3-8.3-21.8,0-30.2L289.8,256L176.9,143.1C168.6,134.8,168.6,121.2,176.9,112.9L176.9,112.9z"
                    />
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccountDetail;
