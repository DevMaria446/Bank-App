import "./LandingPage.css";
import { AppContext } from "../../Context/AppContext";
import { transferMoney } from "../../Store/BankSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user, logoutAction } = useContext(AppContext);

  const allUsers = useSelector((state) => state.bank.users);
  const loggedInUser = allUsers.find((u) => u.id === user?.id);

  const [form, setForm] = useState({
    name: "",
    acc: "",
    amt: "",
    memo: "",
  });

  const handleLogout = () => {
    logoutAction();
    nav("/");
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (!form.acc || !form.amt || Number(form.amt) <= 0) {
      alert("Please enter valid transfer details");
      return;
    }

    dispatch(
      transferMoney({
        senderId: user.id,
        receiverAcc: form.acc,
        amount: Number(form.amt),
        memo: form.memo || `Transfer to ${form.name}`,
      }),
    );

    setForm({ name: "", acc: "", amt: "", memo: "" });
  };

  return (
    <div className="all-landingPage">
      <div className="landingPage-wrapper">
        <div className="landingPage">
          <div className="landingPage-left">
            <div className="landingPage-left-wrapper">
              <div className="landingPage-left-up">
                <h3>Transfer Funds</h3>
              </div>

              <form onSubmit={handleSend}>
                <div className="landingPage-left-center">
                  <div className="landingPage-left-center1">
                    <p>From Account</p>
                    <input
                      className="landingPage-left-center1-input"
                      type="text"
                      placeholder={`Personal Checking (...${loggedInUser?.accNo?.slice(-4)})`}
                      disabled
                    />
                  </div>

                  <div className="landingPage-left-center2">
                    <p>Recipient Full Name</p>
                    <input
                      className="landingPage-left-center2-input"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="E.g, Jane Smith"
                      required
                    />
                  </div>

                  <div className="landingPage-left-center3">
                    <p>Recipient Account Number</p>
                    <input
                      className="landingPage-left-center3-input"
                      value={form.acc}
                      onChange={(e) =>
                        setForm({ ...form, acc: e.target.value })
                      }
                      placeholder="E.g, 09876456897"
                      required
                    />
                  </div>

                  <div className="landingPage-left-center4">
                    <p>Amount</p>
                    <input
                      className="landingPage-left-center4-input"
                      type="number"
                      value={form.amt}
                      onChange={(e) =>
                        setForm({ ...form, amt: e.target.value })
                      }
                      required
                      placeholder="₦ 0.00"
                    />
                  </div>

                  <div className="landingPage-left-center5">
                    <p>Memo (Optional)</p>
                    <textarea
                      className="landingPage-left-center5-input"
                      value={form.memo}
                      onChange={(e) =>
                        setForm({ ...form, memo: e.target.value })
                      }
                      placeholder="Rent, dinner, etc."
                    />
                  </div>
                </div>

                <div className="landingPage-left-down">
                  <button
                    type="submit"
                    className="landingPage-left-down-button"
                  >
                    Send Transfer
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="landingPage-right">
            <div className="landingPage-right-up">
              <p>Total Available Balance</p>
              <h2>₦{loggedInUser?.balance?.toLocaleString()}</h2>
              <p>Across 2 accounts</p>
            </div>

            <div className="landingPage-right-down">
              <div className="landingPage-right-down-wrapper">
                <div className="landingPage-right-down-1">
                  <h2>Transaction History</h2>

                  {loggedInUser?.history?.map((item, index) => (
                    <div key={index} className="landingPage-right-down-2">
                      <div style={{ fontWeight: "600" }}>{item.type}</div>
                      <div className="sub-label" style={{ fontSize: "20px" }}>
                        {item.label}
                      </div>
                      <div
                        className={
                          item.type === "Debit" ? "negative" : "positive"
                        }
                      >
                        {item.type === "Debit" ? "-" : "+"} ₦
                        {item.amount.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
