import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, size, imageUrl, history, linkUrl, match }) => (
  <div
    className={size ? `${size} menu-item` : `menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{"Shop Now".toUpperCase()}</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
