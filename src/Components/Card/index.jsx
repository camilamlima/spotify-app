import React, {Component} from 'react'

import './card.css'

class Card extends Component {

    render(){
      return(
        <div className="card">
          <div className="warp-img">
            <img className="card-img-top" src={this.props.artista.image} alt={this.props.artista.name} />
          </div>
          <div className="card-body">
            <h5 className="card-title">{this.props.artista.name}</h5>
            <a href={this.props.artista.href} className="btn btn-green" target="blank">Playlist</a>
          </div>
        </div>
      );
    }
}
export default Card;







