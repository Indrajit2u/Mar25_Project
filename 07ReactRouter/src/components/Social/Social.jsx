import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Social() {
    const data = useLoaderData()

    // Option 1 to fetch data
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            {data.name} GitHub Follower: {data.followers}
            <img src={data.avatar_url} alt='Git picture' width={300} />
        </div>
    )
}

export default Social

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}
// required useLoaderData hook to fetch the data