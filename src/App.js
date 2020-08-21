import React from 'react';
import './App.css'
import Background from './assets/images/covid.jpg';
import Main from './containers/Main'

const BackgroundStyle = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
};

function App() {
  return (
    <div className="App" style={ BackgroundStyle }>
      <Main/>
    </div>
  );
}

export default App;
