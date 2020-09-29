import React, { useEffect } from 'react';
import { useState } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';

const Home = () => {
    const [country,setCountry]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    return (
        <div>
            <h3>country details:{country.length}</h3>
            {
                country.map(country=><CountryDetail country={country}></CountryDetail>)
            }
        </div>
    );
};

export default Home;