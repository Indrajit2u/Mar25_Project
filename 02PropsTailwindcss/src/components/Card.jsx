import React from 'react'

function Card({username="noUser", btnText="Infinity"}) {
  console.log(username);
  return (
<div className="relative h-[400px] w-[300px] rounded-md">
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="https://media.istockphoto.com/id/1733905944/photo/shri-krishna-sarathi-on-arjuns-chariot-statue-located-in-kota-rajasthan-india.jpg?b=1&s=612x612&w=0&k=20&c=EHzTyTM88WuI9dgBTUDgZjDjF1x4touExcibQ0odo4U=" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h5>
        </a>
        <button>{btnText}</button>
      </div>
    </div>
    </div>
  )
}

export default Card
