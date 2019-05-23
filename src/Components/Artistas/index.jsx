import React, {Component} from 'react'
import Card from '../Card';
import Spotify from 'spotify-web-api-js';

class Artistas extends Component{
    
    constructor(props) {
        super(props);

        this.spotifyApi = new Spotify()
        this.spotifyApi.setAccessToken(localStorage.getItem("token"));
        
        this.state = {
          artistas: []
        };
     }
     componentDidMount (){
       this.search();
     }
  
    search(){
        console.log("Buscando na API")
        let artistas = ["Alcymar Monteiro", "Leela", "Ney Alves"]
        artistas.map((artista) => {
          this.spotifyApi.searchArtists(artista)
            .then(function(data) {
              
              let item = data.artists.items[0];
              let s_artistas = this.state.artistas;
              
              s_artistas.push({
                  name: item.name,
                  href: item.external_urls.spotify,
                  image: item.images[0].url
              })
              
              this.setState({artistas: s_artistas})
              console.log(item);
            }.bind(this), function(err) {
              console.error(err);
            });
          
          
          
        });
        
    }
  
    render(){
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