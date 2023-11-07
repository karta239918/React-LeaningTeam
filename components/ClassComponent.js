//! rcc

import React, { Component } from "react"

export default class ClassComponent extends Component {
  //# 寫法是 ES6 Class .
  //# 會使用 render(){} 來渲染出頁面. && 要多加入 Component .

  //* step 1
  constructor(props) {
    super(props) //! -> 呼叫 super()，這是因為繼承了 Component 類別.
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    } //! -> 設定狀態.
  }

  changeColor = () => {
    this.setState({ color: "Blue" })
  }

  //* step 2
  render() {
    return (
      <>
        <h1>繼承state的color</h1>
        <h2>{this.state.color}ClassComponent</h2>
        <br />

        <h1>使用props更改color</h1>
        <h2>{this.props.color}ClassComponent</h2>
        <br />

        <h1>使用props增加屬性model</h1>
        <h2>{this.props.model}ClassComponent</h2>
        <br />

        <h1>Components in Components</h1>
        <TwoClassComponent />
        <br />

        <h1>Changing the state Object</h1>
        <br />

        <div>
          <h1>My {this.state.brand}</h1>
          <h2>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </h2>
        </div>
        <button type="button" onClick={this.changeColor}>
          Change Color
        </button>
      </>
    )
  }
}

//#Components in Components
class TwoClassComponent extends Component {
  constructor() {
    super()
    this.state = { color: "TwoColor" }
  }

  render() {
    return <h2>I am a TwoClassComponent !</h2>
  }
}

/*   
#  參考網站和文章：

#  - W3Schools React Components: https://www.w3schools.com/react/react_components.asp

#  - ReactJS.org - Components and Props: https://legacy.reactjs.org/docs/components-and-props.html

#  - MDN Web Docs - JavaScript Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

# - HackMD Class Component Tutorial: https://hackmd.io/@Heidi-Liu/note-fe302-class-component#%E7%B5%90%E8%AA%9E
*/
