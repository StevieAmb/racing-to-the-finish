import React from "react";
import UserInputDisplay from "./UserInputDisplay";

const UserInputContainer = ({userInputTimes}) => {
  let allTimes = userInputTimes.map(input => {
    console.log('input', input)
    return (
      <UserInputDisplay 
       key={input}
       time={input}
       />
    )
  })
  return (
    <section>
      {allTimes}
      <button>Get Average In Minutes</button>
    </section>
  )
}

export default UserInputContainer;