import React from "react"
import { useParams } from "react-router-dom"

function User(){

    const {userid} = useParams()
    return(
        <>
            <div className="bg-gray-500 p-10 text-center text-white font-black text-4xl">User : {userid}</div>
        </>
    )
}

export default User