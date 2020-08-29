import React from "react"
import { Router } from "@reach/router"
import MyAppTest from "./myapp"

const App = () => {
  return (
    <Router basepath="/app">
      <MyAppTest path="/my-app" />
    </Router>
  )
}

export default App
