import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  console.log(props.company)
  return (
    <div className='card'>
        <div>
          <div className='top'>
             <img src={props.brandLogo} alt={props.company} />
          <button> Save <Bookmark size={15} /> </button>
          </div>
          <div className='center'>
          <h3> {props.company}<span>{props.datePosted}</span></h3>
          <h2>{props.designation}</h2>
          </div>
        </div>
          <div className='tag'>      
            <h3>{props.tag}</h3>
            <h3>{props.tag2}</h3>
          </div>
        <div className='bottom'>
            <div>
             <h3> {props.pay} </h3>
             <p>{props.location}</p> 
            </div>
            <button>Apply Now</button>
          </div>
      </div>
  )
}

export default Card