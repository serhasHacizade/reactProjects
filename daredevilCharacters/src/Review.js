import React, {useState} from "react";
import characters from "./Data";
//instal this library in npm to use icons
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, img, text} = characters[index];

    //this block return 0 if number's length is greater than character's length  
    const checkNumber = number => {
        if (number > characters.length -1) {
            return 0;
        }
        else if (number < 0) {
            return characters.length -1;
        }
        return number;
    };

    // function that takes the next character
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    // function that takes the previous character
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index -1;
            return checkNumber(newIndex);
        });
    };

    //function that takes the random character
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * characters.length);
        //this if block is gonna take next characters if same index randomNumber and already choosen characters 
        if (randomNumber=== index) {
            randomNumber +=1;
        }
        setIndex(randomNumber);
    };

    return (
            <div className="review">
            <div className="imgContainer">
                <img src={img} alt={name} className="characterImg" />
            </div>
            <div className="info">
                <div className="characterInfo">
                    <h1 className="CharacterName">{name}</h1>
                    <p className="text">{text}</p>
                </div>
                <div className="buttonContainer">
                    <button className="prevBtn" onClick={prevPerson}>
                        <FaChevronLeft />
                    </button>
                    <button className="randomBtn" onClick={randomPerson}>
                        Random
                    </button>
                    <button className="nextBtn" onClick={nextPerson}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );

}

export default Review;