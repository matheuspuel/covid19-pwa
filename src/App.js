import React from 'react';
import './App.css'
import { DivBackgroundStyled, DivContentStyled } from "./style";
import Main from './containers/Main'

function App() {
  return (
    <DivBackgroundStyled className="App">
      <DivContentStyled>
        <Main/>
      </DivContentStyled>
    </DivBackgroundStyled>
  );
}

export default App;
