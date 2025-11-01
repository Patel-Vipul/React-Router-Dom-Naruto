import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState({})

  // useEffect(()=>{
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((res)=>res.json())
  //     .then((res)=>setData(res))
  // },[])

  // console.log(data)

  const data = useLoaderData();
  return (
    <>
      <div className="p-10 bg-gray-700 text-white text-4xl text-center">
        {" "}
        Github Followers : {data.followers}
        <div className="flex justify-center mt-4">
          <img src={data.avatar_url} alt="hitesh-sir" width="300" />
        </div>
        <div className="mt-4">Name : {data.name}</div>
      </div>
    </>
  );
}

export default Github;

export async function githubInfo() {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");

  return response.json();
}
