import React from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'

function Countries(){
    var [country,Setcountry]=React.useState([]);
    React.useEffect(()=>{
        fetch("https://restcountries.com/v3/all").then((res)=>{
            return res.json()
        })
        .then((data)=>{
            Setcountry([...data]);
        })
    },[])
   
    return(
        <div className='container'>
            <h1>Countries</h1>
            <div classNmae="d-flex flex-wrap">
                <div>
                    <ul>
                        {
                            country.map((c)=>{
                                return <Link to={`CountryDetails/${c.name.common}`}><div>{c.name.common}</div></Link>
                        })
                    }
                    </ul>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
             </div>
        </div>
    )
}
export default Countries;