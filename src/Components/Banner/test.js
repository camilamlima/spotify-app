import React from 'react';
import { BrowserRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

import Banner from '.';

test('Testar componente de Banner da aplicação', () => {

    const component = renderer.create(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});