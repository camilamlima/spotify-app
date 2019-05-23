import React, { Component } from 'react';

import './banner.css';

class Banner extends Component {
  render() {
    return (
       <div className="jumbotron jumbotron-devices background">
          <div className="hero-home-bg-cover"></div>  
          <div className="container simplified">
            <div className="row center-text">
              <h1>Música para todos.</h1>
              <h4>Milhões de músicas à sua escolha. E nem precisa de cartão de crédito.</h4>
              <a href="#" className="btn btn-green">
                OBTENHA O SPOTIFY FREE
              </a>
            </div>
          </div>
      </div>
      )
  }
}
export default Banner;