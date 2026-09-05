import React,{ useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  return (

    <div id='counter'>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Increase</button>
      <button onClick={() => setNum(num - 1)}>Decrease</button>
      <button onClick={() => setNum(num * 2)}>Square</button>
      <button onClick={() => setNum(0)}>Reset</button>
    </div> 
  )
}

export default App