import React from 'react';
import { BrowserRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

import App from './App';

test('Testar componente de App da aplicação', () => {

    const component = renderer.create(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});