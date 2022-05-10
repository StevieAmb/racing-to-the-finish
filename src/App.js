import React, { Component } from 'react';
import AvgsContainer from './Components/AvgsContainer';
import './Styling/App.css';
import NavBar from './Components/NavBar';
import InputForm from './Components/InputForm';
import UserInputContainer from './Components/UserInputContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userTimeInputs: []
    }
  }

  addTime = (newTime) => {
      this.setState({userTimeInputs:[...this.state.userTimeInputs, newTime]})
  }

  
  
  render() {
    return (
      <body>
        <main className='App'>
        <NavBar />
        <InputForm addTime={this.addTime} />
        <UserInputContainer userInputTimes={this.state.userTimeInputs} />
        <AvgsContainer userInputs={this.state.userTimeInputs}/>
        </main>
      </body>
    );
  }
}

export default App;
