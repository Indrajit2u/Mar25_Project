import React from 'react'

function Card({name="No Name",search="No Details"}) {
    return (


    <div className="w-100 p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{name}</h5>
        <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">{search}</button>
    </div>

    )
}

export default Card
