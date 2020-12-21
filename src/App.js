import React from 'react';
import NavBar from './lamp/NavBar';
import Header from './components/Header/header';
import LampList from './lamp/lampList'


const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <LampList/>
    </div>
  );
}

export default App;
