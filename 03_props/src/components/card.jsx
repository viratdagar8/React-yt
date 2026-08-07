import React from 'react'


const card = (props) => {

  console.log(props);
 
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1768387760576-be05730e90c2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="Card Image" />
      <h1>{props.user}</h1>
      <p>Card content goes here.</p>
      <button>View Profile</button>
    </div>
  )
}

export default card