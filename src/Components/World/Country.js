import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';


const Country = () => {
    const {countryName} = useParams()
    const [countr , setCountr] = useState({})
    console.log(countr[0]?.maps.googleMaps)
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountr(data))
    },[countryName])


    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])


    return (
        <div>
            {
                loading ? 
                <ClipLoader
                className="m-5"
                size={60}
                color={"#123abc"}
                loading={loading}
                />
                : <div style={{background : 'gray'}}>
                <img src={countr[0]?.flags.png} alt="" />
                <h1>Name : {countr[0]?.name?.common}</h1>
                <h3>Capital : {countr[0]?.capital}</h3>
                <p>Population : {countr[0]?.population}</p>
                <p>Language : {countr[0]?.languages[Object.keys(countr[0]?.languages)[0]]}</p>
                <button style={{border:'0' , background : 'red'}}><a style={{textDecoration : "none" , color : 'white'}} href={countr[0]?.maps?.googleMaps}>Visit Map</a></button>
            </div> 
            }
            

            
        
        </div>
    );
};

export default Country;