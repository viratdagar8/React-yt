import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted by', title)
    
    setTitle('')  
  }
   
  return (
    <div id="main">
      <form onSubmit={(e)=>
        {submitHandler(e)

        }}>
        <input type="text"
         placeholder="Enter your name"
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
          }} />
        <button type="submit">Submit</button    >
      </form>
    </div>
  )
}

export default App