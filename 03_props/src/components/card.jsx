import React from 'react'


const Card = (props) => {

  console.log(props);
 
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h1>{props.user}, {props.age}</h1>
     
      <button>View Profile</button>
    </div>
  )
}

export default Card