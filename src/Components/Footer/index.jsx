import React, { Component } from 'react';

import facebook from './facebook-icon.svg'
import twitter from './twitter-icon.svg'
import instagram from './instagram-icon.svg'


import './footer.css'

class Footer extends Component {
  render() {
    return (
        <footer role="contentinfo" className="footer footer-highlight-aquamarine">
          <div className="container">
            <nav className="row">
    
              <div className="col-xs-12 col-md-2">
                <div className="footer-logo">
                  <a href="#">Spotify</a>
                </div>
              </div>
    
              <div className="col-xs-6 col-sm-4 col-md-2">
                <h3 className="nav-title">EMPRESA</h3>
                <ul className="nav">
    
                  <li>
                    <a href="#" id="nav-link-about">
                      Sobre
                    </a>
                  </li>
    
                  <li>
                    <a href="#" id="nav-link-jobs">
                      Empregos
                    </a>
                  </li>
    
                  <li>
                    <a href="#" id="nav-link-press">
                     For the Record
                    </a>
                  </li>
    
                </ul>
              </div>
    
              <div className="col-xs-6 col-sm-4 col-md-2">
                <h3 className="nav-title">COMUNIDADES</h3>
                <ul className="nav">
    
                  <li>
                    <a href="#" id="nav-link-artists">
                      Para Artistas
                    </a>
                  </li>
    
                  <li>
                    <a href="#" id="nav-link-developers">
                      Desenvolvedores
                    </a>
                  </li>
    
                  <li>
                    <a href="#" id="nav-link-brands">
                      Marcas
                    </a>
                  </li>
                  <li>
                    <a href="#" id="nav-link-brands">
                      Investidores
                    </a>
                  </li>
                  <li>
                    <a href="#" id="nav-link-brands">
                      Fornecedores
                    </a>
                  </li>
    
                </ul>
              </div>
    
              <div className="col-xs-6 col-sm-4 col-md-2">
                <h3 className="nav-title">LINKS ÚTEIS</h3>
                <ul className="nav">
                  <li>
                    <a href="#" id="nav-link-help">
                      Ajuda
                    </a>
                  </li>
    
                  <li>
                    <a href="#" id="nav-link-gift">
                      Gift
                    </a>
                  </li>
    
                  <li className="hidden-xs ">
                    <a href="#" id="nav-link-play">
                      Player da Web
                    </a>
                  </li>
    
                </ul>
              </div>
    
              <div className="col-xs-12 col-md-4 col-social">
                <ul className="nav">
                  <li>
                    <a href="#">
                      <img alt="instagram" src={instagram}/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="twitter" src={twitter}/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="facebook" src={facebook}/>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
    
            <nav className="row row-small">
              <div className="col-xs-8 col-md-6">
    
                <ul className="nav nav-small">
                  <li>
                    <a href="#">Legal</a>
                  </li>
                  <li>
                    <a href="#">Centro de Privacidade</a>
                  </li>
                  <li>
                    <a href="#">Política de Privacidade</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="#">Sobre os anúncios</a>
                  </li>
                </ul>
              </div>
    
              <div className="col-xs-4 col-md-6 text-right">
                <a className="market" href="#" title="Click to change">
                  <div className="media">
                    <div className="media-body media-middle">
                      Brasil
                    </div>
                    <div className="media-right media-middle">
                      <span className="media-object flag-icon flag-icon-br"></span>
                    </div>
                  </div>
                </a>
    
                <small className="copyright">&copy; 2019 Spotify AB</small>
              </div>
            </nav>
          </div>
        </footer>
    
    );
  }
}

export default Footer;