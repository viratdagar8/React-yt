import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Virat' age={20} img="https://plus.unsplash.com/premium_photo-1733317257106-79b094845b8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFic3RyYWN0JTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D" />
      <Card user='Samrat' age={19} img="https://plus.unsplash.com/premium_photo-1711987698775-aedfc9fa658e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWJzdHJhY3QlMjBmYWNlfGVufDB8fDB8fHww" />
      <Card user='Arnav' age={12} img="https://plus.unsplash.com/premium_photo-1686546766850-f857e964814f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWJzdHJhY3QlMjBmYWNlfGVufDB8fDB8fHww" />
    </div>
  )
}
 
export default App