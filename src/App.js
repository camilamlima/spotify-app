import React from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Artistas from './Components/Artistas';


function App() {
  return (
    <div className="App">
      <Header />

      <Banner />
      <Artistas />
  
      <Footer />
    </div>
  );
}

export default App;
