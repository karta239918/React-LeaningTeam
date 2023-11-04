//! rfc

import React, { useEffect, useState } from "react"

export default function FunctionalComponent(
  // props
  {
    brand,
    model,
    color2,
    year
    // brand = "Ford",
    // model = "Mustang",
    // color2 = "red",
    // year = 1964
  }
) {
  const [color, setColor] = useState("")

  const changeColor = () => {
    setColor("Green")
  }
  useEffect(() => {}, [])

  return (
    <>
      {/* <p> {props.CCC}</p> */}
      <div>
        <h1>My {brand}</h1>
        <h2>
          It is a {""}
          {color}
          {color2}
          {""}
          {model}
          from {year}.
        </h2>
      </div>
      <button type="button" onClick={changeColor}>
        onClick
      </button>
    </>
  )
}
