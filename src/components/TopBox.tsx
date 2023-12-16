import { topDealUsers } from "../constants/data";
import "../styles/topBox.scss";
import React from "react";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      {/* Top Deal Users */}
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="users">
              <img src={user.img} alt={user.username} />
              <div className="userTexts">
                <span className="userName">{user.username}</span>
                <span className="userEmail">{user.email}</span>
              </div>
            </div>
            <div className="amount">${user.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
