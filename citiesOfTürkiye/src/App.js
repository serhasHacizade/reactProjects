import React, {useState} from "react";
import Data from "./data";
import Categories from "./Categories";
import CitiesList from "./citiesList";
const allRegions = ["all", ...new Set(Data.map((item) => item.region))];


const App = () => {
    const [cities, setCities] = useState(Data);
    const [regions, setRegions] = useState(allRegions)
    const filterCities = (region) => {
        if (region == "all") {
            setCities(Data)
            console.log(cities);
            return;
        }
        const newCities = Data.filter((item) => item.region === region)
        setCities(newCities);
        
        
    }

    return (
        <div className="section">
            <div className="title">
                <h3>Cities Republic of the Türkiye</h3>
            </div>
            <Categories regions={regions} filterCities={filterCities}/>
            <CitiesList cities={cities}/>
        </div>
    );
}

export default App;