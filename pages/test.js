import React from "react"
import ClassComponent from "../components/ClassComponent"
import FunctionalComponent from "../components/FunctionalComponent"

export default function Test() {
  return (
    <>
      <h1>Test Page</h1>
      <br />
      <h1>ClassComponent</h1>
      <ClassComponent color="YYY" model="GOGO" />

      <hr style={{ margin: "20px 0 " }} />
      <br />
      <h1>FunctionalComponent</h1>
      <FunctionalComponent
        brand="Ford----222"
        model="Mustang----222"
        color2="red----222"
        year="1964----222"
        CCC="AAAAAA"
      />
    </>
  )
}
