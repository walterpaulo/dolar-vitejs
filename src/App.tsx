import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Convert from './page/Convert';
import {Container} from './style';

function App() {
  return (
    <Container>
      <Header />
      <Convert />
      <Footer />
    </Container>
  );
}

export default App;