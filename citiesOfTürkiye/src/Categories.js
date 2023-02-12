import React from "react";

const Categories = ({regions, filterCities}) => {
    return (
        <div className="btnContainer">
            {regions.map((region, index) => {
                return (  
                    <button 
                    type="button" 
                    className="filterBtn"
                    key={index} 
                    onClick={() => filterCities(region)}>{region}</button>
                );
            })}
        </div>
    );
}

export default Categories;