import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
function Home() {
    const [information, setInformation] = useState([])
    const [search,setSearch]=useState("")
    const navigate = useNavigate();

    useEffect(() => {
        getAllInformation();
    }, []);


    async function getAllInformation() {
        const res = await fetch("http://localhost:3000/meryem/");
        const data = await res.json();
        setInformation(data);
    }
    async function handleDelete(id) {
        const res = await fetch("http://localhost:3000/meryem/" + id, {
          method: "DELETE",
        });
        const data = await res.json();
        await getAllInformation();
      }


    return (
        <>
            <Helmet>
                <title>Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <br />
            <br />
            <br />
            {
                information.map(x => (
                    
                    <div key={x._id } style={{border:"1px solid black", width:"200px", height:"200px"}}>
                        <h1>{x.title }</h1>
                        <p>{x.author}</p>
                        <button onClick={()=> handleDelete(x._id)}>delete</button>
                        <Link to={`detail/${x._id}`} ><button>detail</button></Link>
                    </div>
                    
                ))
            }


        </>
    )
}

export default Home
