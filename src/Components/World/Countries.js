import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import './Country.css'

const Countries = () => {
    const [country , setCountry] = useState([])
    console.log(country)    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    const [loading , setLoading] = useState(false)
      useEffect(()=>{
          setLoading(true)
          setTimeout(()=>{
              setLoading(false)
          },1000)
      },[])
    return (
        <div>
            <h1>Total Country Of the World : {country.length}</h1>
            
            <div className='country'>
            <div className='links'>    
            {
                country.map(country => <Link className='link' key={country.name.common} to={`/country/${country.name.common}`}>

                    {country.name.common}
                    
                    </Link>)
            }
            </div>
            <div>
            {
                loading ? 
                <ClipLoader
                className="m-5"
                size={60}
                color={"#123abc"}
                loading={loading}
                />
                : 
            <Outlet>
               
            </Outlet> 
                }
            </div>
            
        </div>
        
        </div>
    );
};

export default Countries;