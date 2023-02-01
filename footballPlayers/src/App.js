import React, {useState} from "react";
import Data from './components/Data'
import List from './components//List'

function App() {
    const [buttonText, setButtonText] = useState("Delete all");
    const [people, setPeople] = useState(Data);
    const myClickHandler = (state) => {
        if (state==="Delete All") {
        setPeople([]);
        setButtonText("Create All");
        } else {
            setPeople(Data)
            setButtonText("Delete All");
        }
    };

    return (
        <main>
            <section className="container">
                <h1>{people.length} Football players</h1>
                <List people={people}/>
                <button onClick={()=>myClickHandler(buttonText)}>{buttonText}</button>
            </section>
        </main>
    );
};
export default App