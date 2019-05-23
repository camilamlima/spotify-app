import React from 'react';
import { BrowserRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

import Card from '.';

test('Testar componente de Card da aplicação', () => {

    let artista = {
        name: "Alcymar Monteiro",
        href: "https://open.spotify.com/artist/0TcVnvKse98awlZxtUKIOk",
        image: "https://i.scdn.co/image/1d0ccd0c4b5ec14c2c4575fd11f365883c971b0b"
    }

    const component = renderer.create(
      <BrowserRouter>
        <Card artista={artista}/>
      </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});