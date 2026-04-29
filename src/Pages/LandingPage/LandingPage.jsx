import "./LandingPage.css";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="all-landingPage">
        <div className="landingPage-wrapper">
          <div className="landingPage">
            <div className="landingPage-left">
              <div className="landingPage-left-wrapper">
                <div className="landingPage-left-up">
                  <h3>Transfer Funds</h3>
                </div>
                <div className="landingPage-left-center">
                  <div className="landingPage-left-center1">
                    <p> From Account</p>
                    <input
                      className="landingPage-left-center1-input"
                      type="text"
                      name="username"
                      placeholder="Personal Checking(...1234)"
                    ></input>
                  </div>
                  <div className="landingPage-left-center2">
                    <p>Recipient Full Name</p>
                    <input
                      className="landingPage-left-center2-input"
                      type="text"
                      name="username"
                      placeholder="E.g, Jane Smith"
                    ></input>
                  </div>
                  <div className="landingPage-left-center3">
                    <p>Recipient Account Number</p>
                    <input
                      className="landingPage-left-center3-input"
                      type="text"
                      name="username"
                      placeholder="E.g, 09876456897"
                    ></input>
                  </div>
                  <div className="landingPage-left-center4">
                    <p>Amount</p>
                    <input
                      className="landingPage-left-center4-input"
                      type="text"
                      name="username"
                      placeholder="# 0.00"
                    ></input>
                  </div>
                  <div className="landingPage-left-center5">
                    <p>Memo (Optional)</p>
                    <input
                      className="landingPage-left-center5-input"
                      type="text"
                      name="username"
                      placeholder="Rent, dinner, etc."
                    ></input>
                  </div>
                </div>
                <div className="landingPage-left-down">
                  <button className="landingPage-left-down-button">
                    Send Transfer
                  </button>
                </div>
              </div>
            </div>
            <div className="landingPage-right">
              <div className="landingPage-right-up">
                <p> Total Available Balance</p>
                <h2> #12,450.80</h2>
                <p>Across 2 accounts</p>
              </div>
              <div className="landingPage-right-down">
                <div className="landingPage-right-down-wrapper">
                <div className="landingPage-right-down-1">
                    <h2>Transaction History</h2>
                </div>
                <div className="landingPage-right-down-2">
                  <div className="down-1"> 
                    <p className="pi">Debit</p>
                    <p className="po"> -#3,200.00</p>
                  </div>
                  <div className="down-2">
                     <p className="py">Credit</p>
                    <p className="pu"> -#9,250.80</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
