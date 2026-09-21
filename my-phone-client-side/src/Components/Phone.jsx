import React from 'react'
import { useLoaderData } from 'react-router'

const Phone = () => {

  const details = useLoaderData();
  // console.log(details)

  return (
    <div>
        <h1 className='text-center p-10'>{details.name}</h1>
        <img className='text-center mx-auto' src={details.image} alt="" />
    </div>
  )
}

export default Phone