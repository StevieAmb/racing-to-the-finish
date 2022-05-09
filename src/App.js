import React, { Component } from 'react';
import AvgsContainer from './Components/AvgsContainer';
import './Styling/App.css';
import NavBar from './Components/NavBar';
import InputForm from './Components/InputForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userTimeInputs: []
    }
  }

  
  
  render() {
    return (
      <body>
        <main className='App'>
        <NavBar />
        <InputForm />
          <AvgsContainer />
        </main>
      </body>
    );
  }
}

export default App;
