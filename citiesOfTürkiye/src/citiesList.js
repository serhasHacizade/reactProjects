import React from "react";
const citiesList = ({cities}) => {
    return (
        <div className="sectionCenter">
            {cities.map((city) => {
                const {id, name, region, img} = city;
                return (
                    <div  key= {id} className="cityItem">
                        <img src={img} alt={name} className="img"/>
                        <div className="cityInfo">
                            <h1>{name}</h1>
                            <h2>Region : {region}</h2>
                        </div>
                    </div>
                );
            })}
        </div>
    );

}

export default citiesList;