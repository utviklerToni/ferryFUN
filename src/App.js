import { Component } from 'react';
import './App.css';

import HeaderFlex from '../src/Components/Header/HeaderFlex';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='container'>
          <HeaderFlex />
        </header>
        <section>
          <HomeScreen />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
