import React from "react";
import "./index.scss";

const icons = {
  'facebook': 'fab fa-facebook fa-3x',
  'twitter': 'fab fa-twitter fa-3x',
};

const Icon = props => (
  <div className="fontawesome">
    <i className={icons[props.icon]}></i>
  </div>
);

export default Icon;