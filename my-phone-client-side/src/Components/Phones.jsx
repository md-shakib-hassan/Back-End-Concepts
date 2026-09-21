import React from 'react'
import { NavLink, useLoaderData } from 'react-router'

const Phones = () => {

  const phones = useLoaderData();

  return (
    <div className='text-center p-10 '>
      <h1>{`Total Phones ${phones.length}`}</h1>
      {
        phones.map(element => <div><NavLink to={`/phone/${element.id}`}>{element.name}</NavLink></div> )
      }
    </div>
  )
}

export default Phones