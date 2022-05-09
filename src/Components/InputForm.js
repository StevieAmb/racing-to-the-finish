import React, { Component } from "react";

class InputForm extends Component {
  constructor() {
    super()
    this.state = {
      time: ''
    }
  }

  render() {
    return (
      <section>
        <label className="form-label">
          Race Time:
        </label>
        <input
          type="text"
          id="time-form"
          name="time-form"
          value={this.state.time}
          placeholder="Format: 12:00 PM, Day 3"
          required
        />
        <button>Submit</button>
      </section>
    )
  }
}


export default InputForm;