import React, { Component } from "react";
import '../Styling/InputForm.css'

class InputForm extends Component {
  constructor() {
    super()
    this.state = {
      time: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTime = this.state.time
    this.props.addTime(newTime)
    this.clearInputs()
  }

  handleTime = (e) => {
    this.setState({time: e.target.value})
  }

  clearInputs = () => {
    this.setState({time: ''})
  }

  render() {
    return (
      <form>
        <label className="form-label">
          Race Time
        </label>
        <div className="user-input">
          <input
            type="text"
            id="time-form"
            name="time-form"
            value={this.state.time}
            placeholder="Format: 12:00 PM, Day 3"
            onChange={e => {this.handleTime(e)}}
            required
          />
          <button className="submit-button" onClick={e => {this.handleSubmit(e)}}>Submit</button>
        </div>
      </form>
    )
  }
}


export default InputForm;