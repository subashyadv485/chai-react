import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   fetch(`https://api.github.com/users/subashyadv485`)
    //   .then(Response => Response.json())
    //   .then(data => {
    //     console.log(data)
    //     setData(data)
    //   } )
    // }, [])
    
  return (
    <div className='text-center text-3xl text-white bg-gray-600 p-4 m-4' >
      Follower: {data.followers}
      <img src={data.avatar_url} alt="Github profile" />
    </div>
  )
}

export default Github

export const githubLoader = async () =>{
    const response =  await fetch(`https://api.github.com/users/subashyadv485`)
    return response.json()
}