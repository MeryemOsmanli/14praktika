import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

function Detail() {
  const {id}=useParams()
   const [getdetail, setgetdetail] = useState({}) 


   useEffect(() => {
    getbyiddetail();
}, [id]);

console.log(getdetail)
    async function getbyiddetail() {
    const res = await fetch("http://localhost:3000/meryem/"+id);
    const data = await res.json();
    setgetdetail(data);
}
  return (
    <div>
        <Helmet>
        <title>Detail</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div>
        <h1>{getdetail.title}</h1>
        <p>{getdetail.author}</p>
      </div>
    </div>
  )
}

export default Detail
