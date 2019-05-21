import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Card from '../Card';
import alcymar from './alcymar.jpg'
import lella from './lella.jpg'
import ney from './ney.jpg'

import Spotify from 'spotify-web-api-js';

import './artistas.css'

class Artistas extends Component{
    
    constructor(props) {
        super(props);

        this.spotifyApi = new Spotify()
        this.spotifyApi.setAccessToken(localStorage.getItem("token"));
        
        this.state = {
          artistas: [
              {
                  name: "Alcymar Monteiro"
              },
              {
                  name: "Leela"
              },
              {
                  name: "Ney Alves"
                  
              }
              ],
        };
     }
  
    search(){
        console.log("tetete")
        this.spotifyApi.searchArtists('Love')
          .then(function(data) {
            console.log('Search artists by "Love"', data);
          }, function(err) {
            console.error(err);
          });
    }
  
    render(){
        this.search.bind(this)()
        return(
          <div className="jumbotron jumbotron-devices">
        
            <div className="container">
              <div className="row">
                {this.state.artistas.map((item, i) => {
                  return (
                    <div className="col-lg-4" key={i}>
                      <Card artista={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
  }
}    
                    
export default Artistas;