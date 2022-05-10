import React from "react";
import UserInputDisplay from "./UserInputDisplay";
import '../Styling/UserInputContainer.css'

const UserInputContainer = ({userInputTimes}) => {
  console.log('userInput', userInputTimes)
  let allTimes = userInputTimes.map(input => {
    console.log('put', input)
    return (
      <UserInputDisplay 
       key={input}
       time={input}
       />
    )
  })
  return (
    <section className="input-times">
      <ul className="input-list">
        {allTimes}
      </ul>
    </section>
  )
}

export default UserInputContainer;