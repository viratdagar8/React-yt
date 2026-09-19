import React from 'react'

const App = () => {

  localStorage.setItem('name', 'VIRAT');
  localStorage.setItem('age', '21');
  localStorage.setItem('city', 'Pune');
  console.log(localStorage.getItem('name'));
  console.log(localStorage.getItem('age'));
  console.log(localStorage.getItem('city'));
  localStorage.removeItem('city');

  const user = {
    name: 'VIRAT',
    age: 21,
    city: 'Delhi'
  }
  console.log(user);
  localStorage.setItem('user', JSON.stringify(user));

  return (
    <div>App</div>
  )
}

export default App