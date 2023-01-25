import React, { useEffect, useState } from "react";
import Loading from "./Loading"
import Phones from "./Phones"
const url = "https://course-api.com/react-useReducer-cart-project"
function App() {
    const [loading, setLoading] = useState(true)
    const [phones, setPhones] = useState([])
    const removePhone = (id) => {
        const newPhones = phones.filter((phone) =>phone.id !== id)
        setPhones(newPhones)
    }
    const fetchPhones = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const phones = await response.json()
            setLoading(false)
            setPhones(phones)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }
    useEffect(() => {
        fetchPhones()
    }, [])
    if (loading) {
        return (
            <main>
                <Loading/>
            </main>
        )
    }
    if (phones.length === 0) {
        return (
            <main>
                <div className="title">
                    <h3>No phones left</h3>
                    <button className="btn" onClick={() => fetchPhones()}>
                        Refresh
                    </button>
                </div>
            </main>
        )
    }
    return (
        <main>
            <Phones phones = {phones} removePhone = {removePhone}/>
        </main>
    )
}
export default App;