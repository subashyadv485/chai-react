import React from 'react'

function card({userName, btntext= "thank"}) {
    console.log(userName)
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
      <img
        src="https://picsum.photos/301"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 "
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{userName}</h2>
          <p className="text-gray-400">
            Hello! My name is subash yadav. i am from birgunj Nepal. i complete my 12th from Himalayan pyramid with 72% .i am curruntly in B-tech cse of 3rd year. I am web develper with good techinacl skill and comunication skill.
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
          {btntext}
        </button>
      </div>
    </div>
  )
}

export default card
