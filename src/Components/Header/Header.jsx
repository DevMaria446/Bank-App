import "./Header.css";

import { AppContext } from "../../Context/AppContext";
import { transferMoney } from "../../Store/BankSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user, logoutAction } = useContext(AppContext);

  const allUsers = useSelector((state) => state.bank.users);
  const loggedInUser = allUsers.find((u) => u.id === user?.id);

  const [form, setForm] = useState({ name: "", acc: "", amt: "", memo: "" });

  const handleLogout = () => {
    logoutAction();
    nav("/");
  };

  const handleSend = (e) => {
    e.preventDefault();
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
    <>
      <header className="all-header">
        <div className="header-wrapper">
          <div className="header">
            <div className="header-left">
              <h3>The Curve Bank</h3>
            </div>
            <div className="header-right">
                    <p>{user?.name}</p>
            <button className="login_btn" onClick={handleLogout}>Logout</button>
              {/* <p>John Doe</p>
              <button className="header-right-button"> Logout</button> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
