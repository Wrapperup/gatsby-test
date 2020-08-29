import React, { useState } from "react"

const buttonStyle = (test: boolean, awesome: boolean) => {
  return {
    padding: test ? "10px" : "100px",
    transform: test ? "rotate(0deg)" : "rotate(360deg)",
    transition: "padding .5s, transform .5s .1s",
  }
}

const MyAppTest = () => {
  const [test, setTest] = useState({ test: false, awesome: true })

  return (
    <div>
      <button
        onClick={() => setTest(s => ({ test: !s.test, awesome: !s.awesome }))}
        style={buttonStyle(test.test, false)}
      >
        hello, {test.test ? "YES" : "no"} and {test.awesome ? "YES" : "no"}
      </button>
    </div>
  )
}

export default MyAppTest
