import React from 'react'

export default function Task6(Props) {
  return (
    <div className='Profilecard'>
      <img src={Props.image} alt="Rabbit Image"/>
      <h1>EC{Props.EC}</h1>
      <h1>Name:{Props.Name}</h1>
      <h2>Phone:{Props.Phone}</h2>
       <h3>Course:{Props.Course}</h3>
       <h3>Batch:{Props.Batch}</h3>
    </div>
  )
}
