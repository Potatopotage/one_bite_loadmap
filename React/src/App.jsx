import Header from "./components/Header"
import Button from "./components/Button"
import './components/app.css'
import Register from "./components/Register"

import { useState, useRef, useEffect } from "react"

const Bulb = ({light}) => {
  return (
    <div>
      {light ? <p style={{backgroundColor: 'yellow'}}>ON</p > : <p style={{backgroundColor: 'gray'}}>OFF</p>}
    </div>
  )
}

function App() {
  const home = '집에 가고 싶다'
  const num = 10

  const ButtonProps = {
    text: '메일',
    color: 'red'
  }

  const [state, setState] = useState(0)

  const [light, setLight] = useState(false)

  const lightChange = () => {
    setLight(!light)
  }

  const ref = useRef()
  console.log(ref)

  useEffect(()=>{}, [])

  return (
    <>
      <Header />
      <h1
        className="practice"
      >Hello</h1>
      <p>{home}</p>
      <p>
        {(num % 2 === 0) ? "짝수" : "홀수"}
      </p>


      < Button {...ButtonProps}/>
      < Button text={'blog'} />
      < Button text={'cafe'} />

      <br />
      <br />

      <div>
        <p>{state}</p>
       <button
        onClick={() => {setState(state + 1)}}
       >+</button> 
      </div>

      <br />
      <br />

      <div>
        <Bulb light={light}/>
        <button 
          onClick={lightChange}
        >
          {light ? '끄기' : '켜기'}
        </button>
      </div>

      <br />
      <br />

      <div>
        < Register/ >
      </div>
    </>
  )
}

export default App
