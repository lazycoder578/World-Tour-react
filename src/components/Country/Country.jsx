import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    const {name, flags, population, area, cca3,} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = ()=>{
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h2 style={{color: visited ? 'black' : 'white'}}>Name: {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() =>handleVisitedCountry(country)}>Mark Visited</button>
            
            <button onClick={()=>handleVisitedFlag(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this Country' : 'I want to visit this Country'}
        </div>
    );
};

export default Country;