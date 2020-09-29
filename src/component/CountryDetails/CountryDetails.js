import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {country}= useParams();
    // console.log(country);
    const [countries,setCountries]= useState({})
    useEffect(()=>{
    const url=`https://restcountries.eu/rest/v2/name/${country}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setCountries(data[0])
    })
}, [])
const {area,name}=countries;
console.log(countries);
    return (
        <div>
            <h4>this country details:::::---{country}</h4>
         {/* <h5>name:{population}</h5>
        <h4>area code:{area}</h4>
        <h5>region:{region}</h5> */}
        {/* <h4>area:{countries.area}</h4> */}
    <h5>area code:{area}</h5>
    {
        countries && <h3>name:{countries.name}</h3>

    }
        </div>
    );
};

export default CountryDetails;