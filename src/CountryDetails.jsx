import React, { useEffect ,useState} from 'react';
import {useParams } from 'react-router-dom';

function CountryDetails(){
    var x=useParams()
    var [details,setDetails]=useState({});
    useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/name/${x.cname}`)
    .then(res=>{ return res.json()})
    .then(data=>{
        console.log(data)
        setDetails({...data[0]})
    })
    },[x])
    return (
        <div className="container">
            <h1>{x.cname} Country Details</h1>
            <h2>{details?.population}</h2>
            {details?.flags?.png && ( <img src={details.flags.png} alt="fgh" />)}
        </div>
    )
   
}

export default CountryDetails;