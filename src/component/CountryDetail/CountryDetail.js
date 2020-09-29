import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const CountryDetail = (props) => {
    const {name,population,region,area}=props.country;

    const history=useHistory()
    const handleClick=(country)=>{
        const url=`/countyDetail/${country}`;
        history.push(url)
    }
    return (
        <div style={{border:'1px solid tomato', marginBottom:'30px', textAlign: 'center'}}>
            <h3>country name:{name}</h3>
            <h4>Total population ever each country:{population}</h4>
    <h5>region:{region}</h5>
    <p>name:  <Link to={`/countyDetail/${name}`}>{name} <button>click here</button></Link></p>
    <button onClick={()=>handleClick(name)}>Click me</button>

    <p>country id:{area}</p>
        </div>
    );
};

export default CountryDetail;