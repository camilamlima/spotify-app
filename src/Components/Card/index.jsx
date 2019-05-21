import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import './card.css'

class Card extends Component {

    render(){
      return(
        <div className="card">
          <img className="card-img-top" src="https://placeimg.com/286/180/animals" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.artista.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Playlist</a>
          </div>
        </div>
      );
    }
}
export default Card;







