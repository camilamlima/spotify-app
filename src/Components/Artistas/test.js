import React from 'react';
import { BrowserRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

import Artistas from '.';

test('Testar componente de Artistas da aplicação', () => {

    const component = renderer.create(
      <BrowserRouter>
        <Artistas />
      </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});