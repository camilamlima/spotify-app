import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img_banner from "./hero-burst.svg";

class Banner extends Component {
  render() {
    return (
       <div className="jumbotron jumbotron-devices">
            <div className="container">
              <div>
                <h2>
                  <span className="text-white">
                    Música para todos!
                  </span>
                </h2>
              </div>
              <img className="center-block" src={img_banner} />
              <ul className="device-list text-white">
                <li>Mobile</li>
                <li>Computer</li>
                <li>Tablet</li>
                <li>Car</li>
              </ul>
              <ul className="device-list text-white">
                <li>Speaker</li>
                <li><a href="#">PlayStation®</a></li>
                <li>TV</li>
                <li><a href="#">Web Player</a></li>
              </ul>
            </div>
      </div>
      )
  }
}
export default Banner;