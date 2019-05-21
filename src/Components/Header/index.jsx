import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SpotifyLogin from 'react-spotify-login';

import './header.css'


import { clientId, redirectUri } from '../../settings';

const onFailure = response => alert(response);
const onSuccess = function (response){
    console.log(response);
    localStorage.setItem("token", response['access_token'])
};


class Header extends Component {

    render(){
        return(
            <header className="navbar navbar-dark navbar-fixed-top" role="banner">
                <div className="container">
                    <div className="navbar-header">
                        <a href="#">
                            <span className= "navbar-logo">Spotify</span>
                        </a>
                    </div>

                    <nav className="collapse navbar-collapse" id="navbar-nav" role="navigation">
                        <ul className="nav navbar-nav navbar-right nav-main">
                            <li className="hidden">
                                <a href="#" id="nav-link-Explore">
                                    Explore
                                </a>
                            </li>
                            <li>
                                <a href="#" id="nav-link-premium">
                                    Premium
                                </a>
                            </li>
                            <li>
                                <a href="#" id="nav-link-help">
                                    Ajuda
                                </a>
                            </li>
                            <li>
                                <a href="#" id="nav-link-download">
                                    Baixar
                                </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <a href="#" id="nav-link-sign-up">
                                    Inscrever-se
                                </a>
                            </li>
                            <li>
                                <SpotifyLogin clientId={clientId}
                                    redirectUri={redirectUri}
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    className="header-login-link"
                                    buttonText="Entrar"
                                />
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}    


export default Header;




