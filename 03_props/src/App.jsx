import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Virat' age={20} />
      <Card user='samrat' age={19} />

    </div>
  )
}
 
export default App