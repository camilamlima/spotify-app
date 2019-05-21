import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import facebook from './facebook-icon.svg'
import twitter from './twitter-icon.svg'
import instagram from './instagram-icon.svg'
import './footer.css'

class Footer extends Component {
  render() {
    return (
    <footer>
    
     <div className="bg-main-img">
                <div className="container">
                    <nav className="row">
    
                        <div className="col-xs-12 col-md-2">
                            <div className="footer-logo">
                                Spotify
                            </div>
                        </div>
                        
      <div className="container">
        <div className="row">
          <div className="span3">
            <div className="widget">
              <h6 className="widgetheading">EMPRESA</h6>
                <ul className="link-list">
                <li><Link to="/">Sobre</Link></li>
                <li><Link to="/">Empregos</Link></li>
                <li><Link to="/">For the Record</Link></li>
              </ul>
            </div>
          </div>
           <div className="span3">
            <div className="widget">
              <h6 className="widgetheading">COMUNIDADES</h6>
               <ul className="link-list">
                <li><Link to="/">Para Artistas</Link></li>
                <li><Link to="/">Desenvolvedores</Link></li>
                <li><Link to="/">Marcas</Link></li>
                <li><Link to="/">Investidores</Link></li>
                <li><Link to="/">Fornecedores</Link></li>
              </ul>
              </div>
            </div>  
            <div className="span3">
            <div className="widget">
              <h6 className="widgetheading">COMUNIDADES</h6>
               <ul className="link-list">
                <li><Link to="/">Para Artistas</Link></li>
                <li><Link to="/">Desenvolvedores</Link></li>
                <li><Link to="/">Marcas</Link></li>
                <li><Link to="/">Investidores</Link></li>
                <li><Link to="/">Fornecedores</Link></li>
              </ul>
              </div>
            </div>  
            <div className="span3">
            <div className="widget">
              <h6 className="widgetheading">LINKS ÚTEIS</h6>
               <ul className="link-list">
                <li><Link to="/">Ajuda</Link></li>
                <li><Link to="/">Player da Web</Link></li>
                 </ul>
              </div>
            </div>  
              <div className="span3">
              <div className="widget">
                <ul className="social-network">
                                <li class="hidden">
                                    <img alt="Instagram" src={instagram} />
                                </li>
                                
                                 <li class="hidden">
                                    <img alt="Twitter" src={twitter} />
                                </li>
                                
                                 <li class="hidden">
                                    <img alt="Facebook" src={facebook} />
                                </li>
                            </ul>    
               </div>
               </div>
          </div>
        </div>
      </nav>
      </div>
      </div>
      </footer>
    );
  }
}

export default Footer;