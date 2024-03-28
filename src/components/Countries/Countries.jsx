import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setcountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then((data => setcountries(data)));
    }, [])

    const handleVisitedCountry = country => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = flag =>{
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul style={{listStyle: 'none'}}>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flag-container">
                <h5>Visited Flag: </h5>
                {
                    visitedFlag.map((flag, idx) => <img key={idx} src={flag} />)
                }
            </div>

            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3} 
                    handleVisitedCountry = {handleVisitedCountry}
                    handleVisitedFlag = {handleVisitedFlag}
                country = {country}/>)
            }
            </div>
        </div>
    );
};

export default Countries;





git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/lazycoder578/World-Tour-react.git
git push -u origin main